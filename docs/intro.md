# Introduction

Load data from <img src="https://raw.githubusercontent.com/sfu-db/connector-x/main/assets/sources.gif" width="6.5%" style="margin-bottom: -2px"/> to <img src="https://raw.githubusercontent.com/sfu-db/connector-x/main/assets/destinations.gif" width="7%" style="margin-bottom: -2px"/>, the fastest way.

ConnectorX enables you to load data from databases into Python in the fastest and most memory efficient way. It is a Python package that provides a high-level interface to the popular database connectors. Here is our rust documentation: [rust-docs](https://sfu-db.github.io/connector-x/rust-docs/connectorx/).

What you need is one line of code:

```python
import connectorx as cx

cx.read_sql("postgresql://username:password@server:port/database", "SELECT * FROM lineitem")
```

Optionally, you can accelerate the data loading using parallelism by specifying a partition column.

```python
import connectorx as cx

cx.read_sql("postgresql://username:password@server:port/database", "SELECT * FROM lineitem", partition_on="l_orderkey", partition_num=10)
```

The function will partition the query by **evenly** splitting the specified column to the amount of partitions.
ConnectorX will assign one thread for each partition to load and write data in parallel.
Currently, we support partitioning on **numerical** columns (**cannot contain NULL**) for **SPJA** queries. 

Check out more detailed usage and examples [here](https://sfu-db.github.io/connector-x/install.html#examples). A general introduction of the project can be found in this [blog post](https://towardsdatascience.com/connectorx-the-fastest-way-to-load-data-from-databases-a65d4d4062d5).

# Performance

We compared different solutions in Python that provides the `read_sql` function, by loading a 10x TPC-H lineitem table (8.6GB) from Postgres into a DataFrame, with 4 cores parallelism.

## Time chart, lower is better.

<p align="center"><img alt="time chart" src="https://raw.githubusercontent.com/sfu-db/connector-x/main/assets/pg-time.png"/></p>

## Memory consumption chart, lower is better.

<p align="center"><img alt="memory chart" src="https://raw.githubusercontent.com/sfu-db/connector-x/main/assets/pg-mem.png"/></p>

In conclusion, ConnectorX uses up to **3x** less memory and **21x** less time (**3x** less memory and **13x** less time compared with Pandas.). More benchmark result can be found under each database pages [here](https://sfu-db.github.io/connector-x/databases.html).

## How does ConnectorX achieve a lightening speed while keeping the memory footprint low?

We observe that existing solutions more or less do data copy multiple times when downloading the data.
Additionally, implementing a data intensive application in Python brings additional cost.

ConnectorX is written in Rust and follows "zero-copy" principle.
This allows it to make full use of the CPU by becoming cache and branch predictor friendly. Moreover, the architecture of ConnectorX ensures the data will be copied exactly once, directly from the source to the destination.

## How does ConnectorX download the data?

Upon receiving the query, e.g. `SELECT * FROM lineitem`, ConnectorX will first issue a `LIMIT 1` query `SELECT * FROM lineitem LIMIT 1` to get the schema of the result set.

Then, if `partition_on` is specified, ConnectorX will issue `SELECT MIN($partition_on), MAX($partition_on) FROM (SELECT * FROM lineitem)` to know the range of the partition column.
After that, the original query is split into partitions based on the min/max information, e.g. `SELECT * FROM (SELECT * FROM lineitem) WHERE $partition_on > 0 AND $partition_on < 10000`.
ConnectorX will then run a count query to get the partition size (e.g. `SELECT COUNT(*) FROM (SELECT * FROM lineitem) WHERE $partition_on > 0 AND $partition_on < 10000`). If the partition
is not specified, the count query will be `SELECT COUNT(*) FROM (SELECT * FROM lineitem)`.

Finally, ConnectorX will use the schema info as well as the count info to allocate memory and download data by executing the queries normally.

Once the downloading begins, there will be one thread for each partition so that the data are downloaded in parallel at the partition level. The thread will issue the query of the corresponding
partition to the database and then write the returned data to the destination row-wise or column-wise (depends on the database) in a streaming fashion. 

# Supported Sources & Destinations

Supported protocols, data types and type mappings can be found [here](Types.md).
For more planned data sources, please check out our [discussion](https://github.com/sfu-db/connector-x/discussions/61).

## Sources
- [x] Postgres
- [x] Mysql
- [x] Mariadb (through mysql protocol)
- [x] Sqlite
- [x] Redshift (through postgres protocol)
- [x] Clickhouse (through mysql protocol)
- [x] SQL Server
- [x] Azure SQL Database (through mssql protocol)
- [x] Oracle
- [x] Big Query - Experimental: need docs and benchmark (also more tests)
- [ ] ODBC (WIP)
- [ ] ...

## Destinations
- [x] Pandas
- [x] PyArrow
- [x] Modin (through Pandas)
- [x] Dask (through Pandas)
- [x] Polars (through PyArrow)
  
# Rust Documentation

Rust docs: [stable](https://docs.rs/connectorx), [nightly](https://sfu-db.github.io/connector-x/connectorx/)

# Next Plan

Checkout our [discussion][discussion_page] to participate in deciding our next plan!

# Developer's Guide
Please see [Developer's Guide](https://github.com/sfu-db/connector-x/blob/main/CONTRIBUTING.md) for information about developing ConnectorX.

# Supports

You are always welcomed to:
1. Ask questions in stackoverflow. Make sure to have #connectorx attached.
2. Ask questions & propose new ideas in our [forum][discussion_page].

# Organizations and Projects using ConnectorX

[<img src="https://raw.githubusercontent.com/pola-rs/polars-static/master/logos/polars-logo-dark.svg" height="100" style="margin-bottom: -2px"/>](https://github.com/pola-rs/polars)
[<img src="https://raw.githubusercontent.com/sfu-db/dataprep/develop/assets/logo.png" height="100" style="margin-bottom: -2px"/>](https://dataprep.ai/)

To add your project/organization here, reply our post [here](https://github.com/sfu-db/connector-x/discussions/146)
