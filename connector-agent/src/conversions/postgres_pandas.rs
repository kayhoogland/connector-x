use crate::data_sources::postgres::PostgresDTypes;
use crate::typesystem::TypeConversion;
use crate::writers::pandas::PandasTypes;
use chrono::{DateTime, NaiveDate, NaiveDateTime, Utc};

associate_typesystems! {
    (PostgresDTypes, PandasTypes), <'a>,
    ([PostgresDTypes::Float4], [PandasTypes::F64]) => [f32, f64] conversion all,
    ([PostgresDTypes::Float8], [PandasTypes::F64]) => [f64, f64] conversion all,
    ([PostgresDTypes::Int4], [PandasTypes::I64]) => [i32, i64] conversion all,
    ([PostgresDTypes::Int8], [PandasTypes::I64]) => [i64, i64] conversion all,
    ([PostgresDTypes::Bool], [PandasTypes::Bool]) => [bool, bool] conversion all,
    ([PostgresDTypes::Text], [PandasTypes::String]) | ([PostgresDTypes::BpChar], [PandasTypes::String]) | ([PostgresDTypes::VarChar], [PandasTypes::String]) => <'a> [&'a [u8], &'a [u8]] conversion all,
    ([PostgresDTypes::Timestamp], [PandasTypes::DateTime]) => [NaiveDateTime, DateTime<Utc>] conversion half,
    ([PostgresDTypes::TimestampTz], [PandasTypes::DateTime]) => [DateTime<Utc>, DateTime<Utc>] conversion all,
    ([PostgresDTypes::Date], [PandasTypes::DateTime]) => [NaiveDate, DateTime<Utc>] conversion half,
}

impl TypeConversion<NaiveDateTime, DateTime<Utc>> for (PostgresDTypes, PandasTypes) {
    fn convert(val: NaiveDateTime) -> DateTime<Utc> {
        DateTime::from_utc(val, Utc)
    }
}

impl TypeConversion<NaiveDate, DateTime<Utc>> for (PostgresDTypes, PandasTypes) {
    fn convert(val: NaiveDate) -> DateTime<Utc> {
        DateTime::from_utc(val.and_hms(0, 0, 0), Utc)
    }
}