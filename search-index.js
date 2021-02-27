var searchIndex = JSON.parse('{\
"connector_agent":{"doc":"","i":[[0,"data_sources","connector_agent","",null,null],[0,"csv","connector_agent::data_sources","",null,null],[3,"CSVSourceBuilder","connector_agent::data_sources::csv","",null,null],[11,"new","","",0,[[]]],[3,"CSVSource","","",null,null],[12,"nrows","","",1,null],[12,"ncols","","",1,null],[11,"new","","",1,[[]]],[0,"dummy","connector_agent::data_sources","",null,null],[3,"MixedSourceBuilder","connector_agent::data_sources::dummy","",null,null],[11,"new","","",2,[[]]],[3,"MixedSource","","",null,null],[11,"new","","",3,[[]]],[0,"postgres","connector_agent::data_sources","",null,null],[3,"PostgresDataSourceBuilder","connector_agent::data_sources::postgres","",null,null],[11,"new","","",4,[[["str",15]]]],[3,"PostgresDataSource","","",null,null],[11,"new","","",5,[[["postgresconnectionmanager",3],["pooledconnection",3]]]],[8,"SourceBuilder","connector_agent::data_sources","",null,null],[18,"DATA_ORDERS","","Supported data orders, ordering by preference.",6,null],[16,"DataSource","","",6,null],[10,"set_data_order","","",6,[[["dataorder",4]],["result",6]]],[10,"build","","",6,[[]]],[8,"DataSource","","In general, a <code>DataSource</code> abstracts the data source as a …",null,null],[16,"TypeSystem","","The type system this <code>DataSource</code> associated with.",7,null],[10,"prepare","","Run the query and put the result into Self.",7,[[["str",15]],["result",6]]],[11,"read","","Read a value <code>T</code> by calling <code>Produce<T>::produce</code>. Usually …",7,[[],["result",6]]],[10,"nrows","","Number of rows this <code>DataSource</code> got.",7,[[],["usize",15]]],[10,"ncols","","Number of cols this <code>DataSource</code> got.",7,[[],["usize",15]]],[11,"infer_schema","","Infer schema from return data",7,[[],[["result",6],["vec",3]]]],[8,"Produce","","A type implemented <code>Produce<T></code> means that it can produce a …",null,null],[10,"produce","","",8,[[],["result",6]]],[0,"writers","connector_agent","",null,null],[0,"arrow","connector_agent::writers","",null,null],[3,"ArrowWriter","connector_agent::writers::arrow","",null,null],[11,"new","","",9,[[]]],[11,"finish","","",9,[[["string",3],["vec",3]],[["vec",3],["recordbatch",3]]]],[3,"ArrowPartitionWriter","","",null,null],[0,"memory","connector_agent::writers","",null,null],[3,"MemoryWriter","connector_agent::writers::memory","This <code>Writer</code> can support mixed data type.",null,null],[11,"new","","",10,[[]]],[11,"buffer_view","","",10,[[["usize",15]],[["option",4],["arrayview2",6]]]],[11,"column_view","","",10,[[["usize",15]],[["arrayview1",6],["option",4]]]],[11,"column_buffer_index","","",10,[[["usize",15]]]],[3,"MemoryPartitionWriter","","The <code>PartitionedWriter</code> of <code>MemoryWriter</code>.",null,null],[8,"Writer","connector_agent::writers","A <code>Writer</code> is associated with a <code>TypeSystem</code> and a …",null,null],[18,"DATA_ORDERS","","",11,null],[16,"TypeSystem","","",11,null],[16,"PartitionWriter","","",11,null],[10,"allocate","","Construct the <code>Writer</code>. This allocates the memory based on …",11,[[["usize",15],["dataorder",4]],["result",6]]],[10,"partition_writers","","Create a bunch of partition writers, with each write <code>count</code>…",11,[[],[["result",6],["vec",3]]]],[10,"schema","","Return the schema of the writer.",11,[[]]],[8,"PartitionWriter","","<code>PartitionWriter</code> writes values to its own region. …",null,null],[16,"TypeSystem","","",12,null],[11,"write","","Write a value of type T to the location (row, col). The …",12,[[["usize",15]]]],[11,"write_checked","","Write a value of type T to the location (row, col), …",12,[[["usize",15]],["result",6]]],[10,"nrows","","Number of rows this <code>PartitionWriter</code> controls.",12,[[],["usize",15]]],[10,"ncols","","Number of rows this <code>PartitionWriter</code> controls.",12,[[],["usize",15]]],[8,"Consume","","A type implemented <code>Consume<T></code> means that it can consume a …",null,null],[10,"consume","","",13,[[["usize",15]]]],[10,"consume_checked","","",13,[[["usize",15]],["result",6]]],[3,"AnyArray","connector_agent","",null,null],[3,"AnyArrayView","","",null,null],[3,"AnyArrayViewMut","","",null,null],[4,"DataOrder","","",null,null],[13,"RowMajor","","",14,null],[13,"ColumnMajor","","",14,null],[3,"Dispatcher","","A dispatcher owns a <code>SourceBuilder</code> <code>SB</code> and a vector of …",null,null],[4,"ConnectorAgentError","","Errors that can be raised from this library.",null,null],[13,"UnexpectedType","","The required type does not same as the schema defined.",15,null],[13,"OutOfBound","","",15,null],[13,"UnsupportedDataOrder","","",15,null],[13,"CannotResolveDataOrder","","",15,null],[13,"CannotParse","","",15,null],[13,"DuplicatedAllocation","","",15,null],[13,"WriterNotAllocated","","",15,null],[13,"DimensionMismatch","","",15,null],[13,"IOError","","",15,null],[13,"PostgresError","","",15,null],[13,"Other","","Any other errors that are too trivial to be put here …",15,null],[6,"Result","","",null,null],[4,"DataType","","This is our intermediate type system used in this library.…",null,null],[13,"F64","","",16,null],[13,"U64","","",16,null],[13,"I64","","",16,null],[13,"Bool","","",16,null],[13,"String","","",16,null],[13,"DateTime","","",16,null],[13,"Date","","",16,null],[8,"ParameterizedFunc","","A ParameterizedFunc refers to a function that is …",null,null],[16,"Function","","",17,null],[11,"realize","","",17,[[]]],[8,"ParameterizedOn","","<code>ParameterizedOn</code> indicates a parameterized function <code>Self</code> …",null,null],[10,"parameterize","","",18,[[]]],[8,"Realize","","Realize means that a TypeSystem can realize a …",null,null],[10,"realize","","realize a parameterized function with the type that self …",19,[[]]],[8,"TypeAssoc","","Associate a static type to a TypeSystem",null,null],[10,"check","","",20,[[],["result",6]]],[8,"TypeSystem","","<code>TypeSystem</code> describes a type system in a value type (e.g. …",null,null],[11,"check","","Check whether T is the same type as defined by self.",21,[[],["result",6]]],[11,"from","","",22,[[]]],[11,"into","","",22,[[]]],[11,"borrow","","",22,[[]]],[11,"borrow_mut","","",22,[[]]],[11,"try_from","","",22,[[],["result",4]]],[11,"try_into","","",22,[[],["result",4]]],[11,"type_id","","",22,[[],["typeid",3]]],[11,"vzip","","",22,[[]]],[11,"init","","",22,[[],["usize",15]]],[11,"deref","","",22,[[["usize",15]]]],[11,"deref_mut","","",22,[[["usize",15]]]],[11,"drop","","",22,[[["usize",15]]]],[11,"from","","",23,[[]]],[11,"into","","",23,[[]]],[11,"borrow","","",23,[[]]],[11,"borrow_mut","","",23,[[]]],[11,"try_from","","",23,[[],["result",4]]],[11,"try_into","","",23,[[],["result",4]]],[11,"type_id","","",23,[[],["typeid",3]]],[11,"vzip","","",23,[[]]],[11,"init","","",23,[[],["usize",15]]],[11,"deref","","",23,[[["usize",15]]]],[11,"deref_mut","","",23,[[["usize",15]]]],[11,"drop","","",23,[[["usize",15]]]],[11,"from","","",24,[[]]],[11,"into","","",24,[[]]],[11,"borrow","","",24,[[]]],[11,"borrow_mut","","",24,[[]]],[11,"try_from","","",24,[[],["result",4]]],[11,"try_into","","",24,[[],["result",4]]],[11,"type_id","","",24,[[],["typeid",3]]],[11,"vzip","","",24,[[]]],[11,"init","","",24,[[],["usize",15]]],[11,"deref","","",24,[[["usize",15]]]],[11,"deref_mut","","",24,[[["usize",15]]]],[11,"drop","","",24,[[["usize",15]]]],[11,"from","","",14,[[]]],[11,"into","","",14,[[]]],[11,"to_owned","","",14,[[]]],[11,"clone_into","","",14,[[]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"equivalent","","",14,[[],["bool",15]]],[11,"vzip","","",14,[[]]],[11,"init","","",14,[[],["usize",15]]],[11,"deref","","",14,[[["usize",15]]]],[11,"deref_mut","","",14,[[["usize",15]]]],[11,"drop","","",14,[[["usize",15]]]],[11,"from","connector_agent::data_sources::csv","",0,[[]]],[11,"into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"vzip","","",0,[[]]],[11,"init","","",0,[[],["usize",15]]],[11,"deref","","",0,[[["usize",15]]]],[11,"deref_mut","","",0,[[["usize",15]]]],[11,"drop","","",0,[[["usize",15]]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"vzip","","",1,[[]]],[11,"init","","",1,[[],["usize",15]]],[11,"deref","","",1,[[["usize",15]]]],[11,"deref_mut","","",1,[[["usize",15]]]],[11,"drop","","",1,[[["usize",15]]]],[11,"from","connector_agent::data_sources::dummy","",2,[[]]],[11,"into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"vzip","","",2,[[]]],[11,"init","","",2,[[],["usize",15]]],[11,"deref","","",2,[[["usize",15]]]],[11,"deref_mut","","",2,[[["usize",15]]]],[11,"drop","","",2,[[["usize",15]]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"vzip","","",3,[[]]],[11,"init","","",3,[[],["usize",15]]],[11,"deref","","",3,[[["usize",15]]]],[11,"deref_mut","","",3,[[["usize",15]]]],[11,"drop","","",3,[[["usize",15]]]],[11,"from","connector_agent::data_sources::postgres","",4,[[]]],[11,"into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"vzip","","",4,[[]]],[11,"init","","",4,[[],["usize",15]]],[11,"deref","","",4,[[["usize",15]]]],[11,"deref_mut","","",4,[[["usize",15]]]],[11,"drop","","",4,[[["usize",15]]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"vzip","","",5,[[]]],[11,"init","","",5,[[],["usize",15]]],[11,"deref","","",5,[[["usize",15]]]],[11,"deref_mut","","",5,[[["usize",15]]]],[11,"drop","","",5,[[["usize",15]]]],[11,"from","connector_agent","",25,[[]]],[11,"into","","",25,[[]]],[11,"borrow","","",25,[[]]],[11,"borrow_mut","","",25,[[]]],[11,"try_from","","",25,[[],["result",4]]],[11,"try_into","","",25,[[],["result",4]]],[11,"type_id","","",25,[[],["typeid",3]]],[11,"vzip","","",25,[[]]],[11,"init","","",25,[[],["usize",15]]],[11,"deref","","",25,[[["usize",15]]]],[11,"deref_mut","","",25,[[["usize",15]]]],[11,"drop","","",25,[[["usize",15]]]],[11,"from","","",15,[[]]],[11,"into","","",15,[[]]],[11,"to_string","","",15,[[],["string",3]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"vzip","","",15,[[]]],[11,"as_fail","","",15,[[],["fail",8]]],[11,"init","","",15,[[],["usize",15]]],[11,"deref","","",15,[[["usize",15]]]],[11,"deref_mut","","",15,[[["usize",15]]]],[11,"drop","","",15,[[["usize",15]]]],[11,"from","","",16,[[]]],[11,"into","","",16,[[]]],[11,"to_owned","","",16,[[]]],[11,"clone_into","","",16,[[]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"equivalent","","",16,[[],["bool",15]]],[11,"vzip","","",16,[[]]],[11,"init","","",16,[[],["usize",15]]],[11,"deref","","",16,[[["usize",15]]]],[11,"deref_mut","","",16,[[["usize",15]]]],[11,"drop","","",16,[[["usize",15]]]],[11,"from","connector_agent::writers::arrow","",9,[[]]],[11,"into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"vzip","","",9,[[]]],[11,"init","","",9,[[],["usize",15]]],[11,"deref","","",9,[[["usize",15]]]],[11,"deref_mut","","",9,[[["usize",15]]]],[11,"drop","","",9,[[["usize",15]]]],[11,"from","","",26,[[]]],[11,"into","","",26,[[]]],[11,"borrow","","",26,[[]]],[11,"borrow_mut","","",26,[[]]],[11,"try_from","","",26,[[],["result",4]]],[11,"try_into","","",26,[[],["result",4]]],[11,"type_id","","",26,[[],["typeid",3]]],[11,"vzip","","",26,[[]]],[11,"init","","",26,[[],["usize",15]]],[11,"deref","","",26,[[["usize",15]]]],[11,"deref_mut","","",26,[[["usize",15]]]],[11,"drop","","",26,[[["usize",15]]]],[11,"from","connector_agent::writers::memory","",10,[[]]],[11,"into","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"vzip","","",10,[[]]],[11,"init","","",10,[[],["usize",15]]],[11,"deref","","",10,[[["usize",15]]]],[11,"deref_mut","","",10,[[["usize",15]]]],[11,"drop","","",10,[[["usize",15]]]],[11,"from","","",27,[[]]],[11,"into","","",27,[[]]],[11,"borrow","","",27,[[]]],[11,"borrow_mut","","",27,[[]]],[11,"try_from","","",27,[[],["result",4]]],[11,"try_into","","",27,[[],["result",4]]],[11,"type_id","","",27,[[],["typeid",3]]],[11,"vzip","","",27,[[]]],[11,"init","","",27,[[],["usize",15]]],[11,"deref","","",27,[[["usize",15]]]],[11,"deref_mut","","",27,[[["usize",15]]]],[11,"drop","","",27,[[["usize",15]]]],[11,"realize","connector_agent","",16,[[]]],[11,"set_data_order","connector_agent::data_sources::csv","",0,[[["dataorder",4]],[["result",4],["connectoragenterror",4]]]],[11,"build","","",0,[[]]],[11,"set_data_order","connector_agent::data_sources::dummy","",2,[[["dataorder",4]],[["result",4],["connectoragenterror",4]]]],[11,"build","","",2,[[]]],[11,"set_data_order","connector_agent::data_sources::postgres","",4,[[["dataorder",4]],["result",6]]],[11,"build","","",4,[[]]],[11,"prepare","connector_agent::data_sources::csv","The parameter <code>query</code> is the path of the csv file",1,[[["str",15]],["result",6]]],[11,"nrows","","",1,[[],["usize",15]]],[11,"ncols","","",1,[[],["usize",15]]],[11,"infer_schema","","",1,[[],[["vec",3],["result",6]]]],[11,"prepare","connector_agent::data_sources::dummy","",3,[[["str",15]],["result",6]]],[11,"nrows","","",3,[[],["usize",15]]],[11,"ncols","","",3,[[],["usize",15]]],[11,"prepare","connector_agent::data_sources::postgres","",5,[[["str",15]],["result",6]]],[11,"nrows","","",5,[[],["usize",15]]],[11,"ncols","","",5,[[],["usize",15]]],[11,"produce","connector_agent::data_sources::csv","",1,[[],[["u64",15],["result",6]]]],[11,"produce","","",1,[[],[["result",6],["option",4]]]],[11,"produce","","",1,[[],[["result",6],["i64",15]]]],[11,"produce","","",1,[[],[["result",6],["option",4]]]],[11,"produce","","",1,[[],[["f64",15],["result",6]]]],[11,"produce","","",1,[[],[["result",6],["option",4]]]],[11,"produce","","",1,[[],[["bool",15],["result",6]]]],[11,"produce","","",1,[[],[["result",6],["option",4]]]],[11,"produce","","",1,[[],[["result",6],["string",3]]]],[11,"produce","","",1,[[],[["option",4],["result",6]]]],[11,"produce","","",1,[[],[["result",6],["datetime",3]]]],[11,"produce","","",1,[[],[["result",6],["option",4]]]],[11,"produce","","",1,[[],[["date",3],["result",6]]]],[11,"produce","","",1,[[],[["option",4],["result",6]]]],[11,"produce","connector_agent::data_sources::dummy","",3,[[],[["u64",15],["result",6]]]],[11,"produce","","",3,[[],[["result",6],["option",4]]]],[11,"produce","","",3,[[],[["result",6],["i64",15]]]],[11,"produce","","",3,[[],[["result",6],["option",4]]]],[11,"produce","","",3,[[],[["f64",15],["result",6]]]],[11,"produce","","",3,[[],[["result",6],["option",4]]]],[11,"produce","","",3,[[],[["result",6],["string",3]]]],[11,"produce","","",3,[[],[["option",4],["result",6]]]],[11,"produce","","",3,[[],[["bool",15],["result",6]]]],[11,"produce","","",3,[[],[["result",6],["option",4]]]],[11,"produce","","",3,[[],[["result",6],["datetime",3]]]],[11,"produce","","",3,[[],[["result",6],["option",4]]]],[11,"produce","","",3,[[],[["date",3],["result",6]]]],[11,"produce","","",3,[[],[["option",4],["result",6]]]],[11,"produce","connector_agent::data_sources::postgres","",5,[[],[["u64",15],["result",6]]]],[11,"produce","","",5,[[],[["result",6],["option",4]]]],[11,"produce","","",5,[[],[["result",6],["i64",15]]]],[11,"produce","","",5,[[],[["result",6],["option",4]]]],[11,"produce","","",5,[[],[["f64",15],["result",6]]]],[11,"produce","","",5,[[],[["result",6],["option",4]]]],[11,"produce","","",5,[[],[["bool",15],["result",6]]]],[11,"produce","","",5,[[],[["result",6],["option",4]]]],[11,"produce","","",5,[[],[["result",6],["string",3]]]],[11,"produce","","",5,[[],[["option",4],["result",6]]]],[11,"produce","","",5,[[],[["result",6],["datetime",3]]]],[11,"produce","","",5,[[],[["result",6],["option",4]]]],[11,"produce","","",5,[[],[["date",3],["result",6]]]],[11,"produce","","",5,[[],[["option",4],["result",6]]]],[11,"allocate","connector_agent::writers::arrow","",9,[[["usize",15],["dataorder",4]],[["result",4],["connectoragenterror",4]]]],[11,"partition_writers","","",9,[[],[["connectoragenterror",4],["result",4],["vec",3]]]],[11,"schema","","",9,[[]]],[11,"allocate","connector_agent::writers::memory","",10,[[["usize",15],["dataorder",4]],[["result",4],["connectoragenterror",4]]]],[11,"partition_writers","","",10,[[],[["connectoragenterror",4],["result",4],["vec",3]]]],[11,"schema","","",10,[[]]],[11,"nrows","connector_agent::writers::arrow","",26,[[],["usize",15]]],[11,"ncols","","",26,[[],["usize",15]]],[11,"nrows","connector_agent::writers::memory","",27,[[],["usize",15]]],[11,"ncols","","",27,[[],["usize",15]]],[11,"consume","connector_agent::writers::arrow","",26,[[["usize",15]]]],[11,"consume_checked","","",26,[[["usize",15]],["result",6]]],[11,"consume","connector_agent::writers::memory","",27,[[["usize",15]]]],[11,"consume_checked","","",27,[[["usize",15]],["result",6]]],[11,"from","connector_agent","",22,[[["array",6]]]],[11,"from","","",15,[[["error",3]]]],[11,"from","","",15,[[["error",3]]]],[11,"from","","",15,[[["error",3]]]],[11,"clone","","",14,[[],["dataorder",4]]],[11,"clone","","",16,[[],["datatype",4]]],[11,"cmp","","",16,[[["datatype",4]],["ordering",4]]],[11,"eq","","",14,[[["dataorder",4]],["bool",15]]],[11,"eq","","",16,[[["datatype",4]],["bool",15]]],[11,"ne","","",16,[[["datatype",4]],["bool",15]]],[11,"partial_cmp","","",16,[[["datatype",4]],[["ordering",4],["option",4]]]],[11,"fmt","","",14,[[["formatter",3]],["result",6]]],[11,"fmt","","",15,[[["formatter",3]],["result",6]]],[11,"fmt","","",16,[[["formatter",3]],["result",6]]],[11,"fmt","","",15,[[["formatter",3]],["result",6]]],[11,"hash","","",16,[[]]],[11,"source","","",15,[[],[["error",8],["option",4]]]],[11,"check","","Check whether T is the same type as defined by self.",21,[[],["result",6]]],[11,"realize","","",17,[[]]],[11,"new","","",22,[[["array",6]]]],[11,"view","","",22,[[],["anyarrayview",3]]],[11,"view_mut","","",22,[[],["anyarrayviewmut",3]]],[11,"downcast_ref","","",22,[[],[["option",4],["array",6]]]],[11,"downcast_mut","","",22,[[],[["array",6],["option",4]]]],[11,"new","","",23,[[["arrayview",6]]]],[11,"downcast","","",23,[[],[["arrayview",6],["option",4]]]],[11,"udowncast","","",23,[[],["arrayview",6]]],[11,"split_at","","",23,[[["axis",3],["ix",6]]]],[11,"new","","",24,[[["arrayviewmut",6]]]],[11,"downcast","","",24,[[],[["option",4],["arrayviewmut",6]]]],[11,"udowncast","","",24,[[],["arrayviewmut",6]]],[11,"split_at","","",24,[[["axis",3],["ix",6]]]],[11,"reborrow","","",24,[[]]],[11,"new","","Create a new dispatcher by providing a source builder, …",25,[[]]],[11,"run_checked","","",25,[[],["result",6]]],[11,"run","","",25,[[],["result",6]]]],"p":[[3,"CSVSourceBuilder"],[3,"CSVSource"],[3,"MixedSourceBuilder"],[3,"MixedSource"],[3,"PostgresDataSourceBuilder"],[3,"PostgresDataSource"],[8,"SourceBuilder"],[8,"DataSource"],[8,"Produce"],[3,"ArrowWriter"],[3,"MemoryWriter"],[8,"Writer"],[8,"PartitionWriter"],[8,"Consume"],[4,"DataOrder"],[4,"ConnectorAgentError"],[4,"DataType"],[8,"ParameterizedFunc"],[8,"ParameterizedOn"],[8,"Realize"],[8,"TypeAssoc"],[8,"TypeSystem"],[3,"AnyArray"],[3,"AnyArrayView"],[3,"AnyArrayViewMut"],[3,"Dispatcher"],[3,"ArrowPartitionWriter"],[3,"MemoryPartitionWriter"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);