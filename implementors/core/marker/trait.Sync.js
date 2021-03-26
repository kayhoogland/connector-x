(function() {var implementors = {};
implementors["connector_agent"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"connector_agent/data_order/enum.DataOrder.html\" title=\"enum connector_agent::data_order::DataOrder\">DataOrder</a>","synthetic":true,"types":["connector_agent::data_order::DataOrder"]},{"text":"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"connector_agent/destinations/arrow/struct.ArrowDestination.html\" title=\"struct connector_agent::destinations::arrow::ArrowDestination\">ArrowDestination</a>","synthetic":true,"types":["connector_agent::destinations::arrow::ArrowDestination"]},{"text":"impl&lt;'a&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"connector_agent/destinations/arrow/struct.ArrowPartitionWriter.html\" title=\"struct connector_agent::destinations::arrow::ArrowPartitionWriter\">ArrowPartitionWriter</a>&lt;'a&gt;","synthetic":true,"types":["connector_agent::destinations::arrow::ArrowPartitionWriter"]},{"text":"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"connector_agent/destinations/memory/struct.MemoryDestination.html\" title=\"struct connector_agent::destinations::memory::MemoryDestination\">MemoryDestination</a>","synthetic":true,"types":["connector_agent::destinations::memory::MemoryDestination"]},{"text":"impl&lt;'a&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"connector_agent/destinations/memory/struct.MemoryPartitionDestination.html\" title=\"struct connector_agent::destinations::memory::MemoryPartitionDestination\">MemoryPartitionDestination</a>&lt;'a&gt;","synthetic":true,"types":["connector_agent::destinations::memory::MemoryPartitionDestination"]},{"text":"impl&lt;'a, S, W, TP&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"connector_agent/dispatcher/struct.Dispatcher.html\" title=\"struct connector_agent::dispatcher::Dispatcher\">Dispatcher</a>&lt;'a, S, W, TP&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;TP: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["connector_agent::dispatcher::Dispatcher"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"connector_agent/dummy_typesystem/enum.DummyTypeSystem.html\" title=\"enum connector_agent::dummy_typesystem::DummyTypeSystem\">DummyTypeSystem</a>","synthetic":true,"types":["connector_agent::dummy_typesystem::DummyTypeSystem"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"connector_agent/errors/enum.ConnectorAgentError.html\" title=\"enum connector_agent::errors::ConnectorAgentError\">ConnectorAgentError</a>","synthetic":true,"types":["connector_agent::errors::ConnectorAgentError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"connector_agent/errors/enum.ProduceContext.html\" title=\"enum connector_agent::errors::ProduceContext\">ProduceContext</a>","synthetic":true,"types":["connector_agent::errors::ProduceContext"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"connector_agent/sources/csv/struct.CSVSource.html\" title=\"struct connector_agent::sources::csv::CSVSource\">CSVSource</a>","synthetic":true,"types":["connector_agent::sources::csv::CSVSource"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"connector_agent/sources/csv/struct.CSVSourcePartition.html\" title=\"struct connector_agent::sources::csv::CSVSourcePartition\">CSVSourcePartition</a>","synthetic":true,"types":["connector_agent::sources::csv::CSVSourcePartition"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"connector_agent/sources/csv/struct.CSVSourcePartitionParser.html\" title=\"struct connector_agent::sources::csv::CSVSourcePartitionParser\">CSVSourcePartitionParser</a>&lt;'a&gt;","synthetic":true,"types":["connector_agent::sources::csv::CSVSourcePartitionParser"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"connector_agent/sources/dummy/struct.DummySource.html\" title=\"struct connector_agent::sources::dummy::DummySource\">DummySource</a>","synthetic":true,"types":["connector_agent::sources::dummy::DummySource"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"connector_agent/sources/dummy/struct.DummySourcePartition.html\" title=\"struct connector_agent::sources::dummy::DummySourcePartition\">DummySourcePartition</a>","synthetic":true,"types":["connector_agent::sources::dummy::DummySourcePartition"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"connector_agent/sources/dummy/struct.DummySourcePartitionParser.html\" title=\"struct connector_agent::sources::dummy::DummySourcePartitionParser\">DummySourcePartitionParser</a>&lt;'a&gt;","synthetic":true,"types":["connector_agent::sources::dummy::DummySourcePartitionParser"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"connector_agent/sources/postgres/enum.PostgresTypeSystem.html\" title=\"enum connector_agent::sources::postgres::PostgresTypeSystem\">PostgresTypeSystem</a>","synthetic":true,"types":["connector_agent::sources::postgres::typesystem::PostgresTypeSystem"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"connector_agent/sources/postgres/enum.Binary.html\" title=\"enum connector_agent::sources::postgres::Binary\">Binary</a>","synthetic":true,"types":["connector_agent::sources::postgres::Binary"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"connector_agent/sources/postgres/enum.CSV.html\" title=\"enum connector_agent::sources::postgres::CSV\">CSV</a>","synthetic":true,"types":["connector_agent::sources::postgres::CSV"]},{"text":"impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"connector_agent/sources/postgres/struct.PostgresSource.html\" title=\"struct connector_agent::sources::postgres::PostgresSource\">PostgresSource</a>&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["connector_agent::sources::postgres::PostgresSource"]},{"text":"impl&lt;P&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"connector_agent/sources/postgres/struct.PostgresSourcePartition.html\" title=\"struct connector_agent::sources::postgres::PostgresSourcePartition\">PostgresSourcePartition</a>&lt;P&gt;","synthetic":true,"types":["connector_agent::sources::postgres::PostgresSourcePartition"]},{"text":"impl&lt;'a&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"connector_agent/sources/postgres/struct.PostgresBinarySourcePartitionParser.html\" title=\"struct connector_agent::sources::postgres::PostgresBinarySourcePartitionParser\">PostgresBinarySourcePartitionParser</a>&lt;'a&gt;","synthetic":true,"types":["connector_agent::sources::postgres::PostgresBinarySourcePartitionParser"]},{"text":"impl&lt;'a&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"connector_agent/sources/postgres/struct.PostgresCSVSourceParser.html\" title=\"struct connector_agent::sources::postgres::PostgresCSVSourceParser\">PostgresCSVSourceParser</a>&lt;'a&gt;","synthetic":true,"types":["connector_agent::sources::postgres::PostgresCSVSourceParser"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"connector_agent/transports/struct.CSVArrowTransport.html\" title=\"struct connector_agent::transports::CSVArrowTransport\">CSVArrowTransport</a>","synthetic":true,"types":["connector_agent::transports::csv_arrow::CSVArrowTransport"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"connector_agent/transports/struct.CSVMemoryTransport.html\" title=\"struct connector_agent::transports::CSVMemoryTransport\">CSVMemoryTransport</a>","synthetic":true,"types":["connector_agent::transports::csv_memory::CSVMemoryTransport"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"connector_agent/transports/struct.DummyArrowTransport.html\" title=\"struct connector_agent::transports::DummyArrowTransport\">DummyArrowTransport</a>","synthetic":true,"types":["connector_agent::transports::dummy_arrow::DummyArrowTransport"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"connector_agent/transports/struct.DummyMemoryTransport.html\" title=\"struct connector_agent::transports::DummyMemoryTransport\">DummyMemoryTransport</a>","synthetic":true,"types":["connector_agent::transports::dummy_memory::DummyMemoryTransport"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"connector_agent/transports/struct.PostgresArrowTransport.html\" title=\"struct connector_agent::transports::PostgresArrowTransport\">PostgresArrowTransport</a>","synthetic":true,"types":["connector_agent::transports::postgres_arrow::PostgresArrowTransport"]},{"text":"impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"connector_agent/transports/struct.PostgresMemoryTransport.html\" title=\"struct connector_agent::transports::PostgresMemoryTransport\">PostgresMemoryTransport</a>&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["connector_agent::transports::postgres_memory::PostgresMemoryTransport"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()