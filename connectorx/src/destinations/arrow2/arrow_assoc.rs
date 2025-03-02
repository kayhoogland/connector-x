use arrow2::{
    array::*,
    datatypes::{DataType as ArrowDataType, Field, TimeUnit},
};
use chrono::{Date, DateTime, NaiveDate, NaiveDateTime, NaiveTime, Timelike, Utc};

use crate::constants::SECONDS_IN_DAY;

/// Associate arrow builder with native type
pub trait ArrowAssoc {
    type Builder: MutableArray + 'static + Send;

    fn builder(nrows: usize) -> Self::Builder;
    fn push(builder: &mut Self::Builder, value: Self);
    fn field(header: &str) -> Field;
}

macro_rules! impl_arrow_assoc {
    ($T:ty, $AT:expr, $B:ty) => {
        impl ArrowAssoc for $T {
            type Builder = $B;

            fn builder(nrows: usize) -> Self::Builder {
                Self::Builder::with_capacity(nrows)
            }

            #[inline]
            fn push(builder: &mut Self::Builder, value: Self) {
                builder.push(Some(value));
            }

            fn field(header: &str) -> Field {
                Field::new(header, $AT, false)
            }
        }

        impl ArrowAssoc for Option<$T> {
            type Builder = $B;

            fn builder(nrows: usize) -> Self::Builder {
                Self::Builder::with_capacity(nrows)
            }

            #[inline]
            fn push(builder: &mut Self::Builder, value: Self) {
                builder.push(value);
            }

            fn field(header: &str) -> Field {
                Field::new(header, $AT, true)
            }
        }
    };
}

impl_arrow_assoc!(u32, ArrowDataType::UInt32, MutablePrimitiveArray<u32>);
impl_arrow_assoc!(u64, ArrowDataType::UInt64, MutablePrimitiveArray<u64>);
impl_arrow_assoc!(i32, ArrowDataType::Int32, MutablePrimitiveArray<i32>);
impl_arrow_assoc!(i64, ArrowDataType::Int64, MutablePrimitiveArray<i64>);
impl_arrow_assoc!(f32, ArrowDataType::Float32, MutablePrimitiveArray<f32>);
impl_arrow_assoc!(f64, ArrowDataType::Float64, MutablePrimitiveArray<f64>);
impl_arrow_assoc!(bool, ArrowDataType::Boolean, MutableBooleanArray);

impl ArrowAssoc for &str {
    type Builder = MutableUtf8Array<i64>;

    fn builder(nrows: usize) -> Self::Builder {
        MutableUtf8Array::<i64>::with_capacity(nrows)
    }

    #[inline]
    fn push(builder: &mut Self::Builder, value: Self) {
        builder.push(Some(value));
    }

    fn field(header: &str) -> Field {
        Field::new(header, ArrowDataType::LargeUtf8, false)
    }
}

impl ArrowAssoc for Option<&str> {
    type Builder = MutableUtf8Array<i64>;

    fn builder(nrows: usize) -> Self::Builder {
        MutableUtf8Array::<i64>::with_capacity(nrows)
    }

    #[inline]
    fn push(builder: &mut Self::Builder, value: Self) {
        builder.push(value);
    }

    fn field(header: &str) -> Field {
        Field::new(header, ArrowDataType::LargeUtf8, true)
    }
}

impl ArrowAssoc for String {
    type Builder = MutableUtf8Array<i64>;

    fn builder(nrows: usize) -> Self::Builder {
        MutableUtf8Array::<i64>::with_capacity(nrows)
    }

    #[inline]
    fn push(builder: &mut Self::Builder, value: String) {
        builder.push(Some(value));
    }

    fn field(header: &str) -> Field {
        Field::new(header, ArrowDataType::LargeUtf8, false)
    }
}

impl ArrowAssoc for Option<String> {
    type Builder = MutableUtf8Array<i64>;

    fn builder(nrows: usize) -> Self::Builder {
        MutableUtf8Array::with_capacity(nrows)
    }

    #[inline]
    fn push(builder: &mut Self::Builder, value: Self) {
        builder.push(value);
    }

    fn field(header: &str) -> Field {
        Field::new(header, ArrowDataType::LargeUtf8, true)
    }
}

impl ArrowAssoc for DateTime<Utc> {
    type Builder = MutablePrimitiveArray<i64>;

    fn builder(nrows: usize) -> Self::Builder {
        MutablePrimitiveArray::with_capacity(nrows).to(ArrowDataType::Timestamp(
            TimeUnit::Nanosecond,
            Some("UTC".to_string()),
        ))
    }

    #[inline]
    fn push(builder: &mut Self::Builder, value: DateTime<Utc>) {
        builder.push(Some(value).map(|x| x.timestamp_nanos()));
    }

    fn field(header: &str) -> Field {
        Field::new(
            header,
            ArrowDataType::Timestamp(TimeUnit::Nanosecond, Some("UTC".to_string())),
            true,
        )
    }
}

impl ArrowAssoc for Option<DateTime<Utc>> {
    type Builder = MutablePrimitiveArray<i64>;

    fn builder(nrows: usize) -> Self::Builder {
        MutablePrimitiveArray::with_capacity(nrows).to(ArrowDataType::Timestamp(
            TimeUnit::Nanosecond,
            Some("UTC".to_string()),
        ))
    }

    #[inline]
    fn push(builder: &mut Self::Builder, value: Option<DateTime<Utc>>) {
        builder.push(value.map(|x| x.timestamp_nanos()));
    }

    fn field(header: &str) -> Field {
        Field::new(
            header,
            ArrowDataType::Timestamp(TimeUnit::Nanosecond, Some("UTC".to_string())),
            false,
        )
    }
}

impl ArrowAssoc for Date<Utc> {
    type Builder = MutablePrimitiveArray<i64>;

    fn builder(nrows: usize) -> Self::Builder {
        MutablePrimitiveArray::with_capacity(nrows).to(ArrowDataType::Timestamp(
            TimeUnit::Second,
            Some("UTC".to_string()),
        ))
    }

    #[inline]
    fn push(builder: &mut Self::Builder, value: Date<Utc>) {
        builder.push(Some(value).map(|x| x.and_hms(0, 0, 0).timestamp()))
    }

    fn field(header: &str) -> Field {
        Field::new(
            header,
            ArrowDataType::Timestamp(TimeUnit::Second, Some("UTC".to_string())),
            false,
        )
    }
}

impl ArrowAssoc for Option<Date<Utc>> {
    type Builder = MutablePrimitiveArray<i64>;

    fn builder(nrows: usize) -> Self::Builder {
        MutablePrimitiveArray::with_capacity(nrows).to(ArrowDataType::Timestamp(
            TimeUnit::Second,
            Some("UTC".to_string()),
        ))
    }

    fn push(builder: &mut Self::Builder, value: Option<Date<Utc>>) {
        // time-aware are stored as naive (i64) + offset (on the datatype)
        builder.push(value.map(|x| x.and_hms(0, 0, 0).timestamp()))
    }

    fn field(header: &str) -> Field {
        Field::new(
            header,
            ArrowDataType::Timestamp(TimeUnit::Second, Some("UTC".to_string())),
            false,
        )
    }
}

fn naive_date_to_date32(nd: NaiveDate) -> i32 {
    (nd.and_hms(0, 0, 0).timestamp() / SECONDS_IN_DAY) as i32
}

fn naive_time_to_time64_nanos(nd: NaiveTime) -> i64 {
    nd.num_seconds_from_midnight() as i64 * 1_000_000_000 + nd.nanosecond() as i64
}

impl ArrowAssoc for Option<NaiveDate> {
    type Builder = MutablePrimitiveArray<i32>;

    fn builder(nrows: usize) -> Self::Builder {
        MutablePrimitiveArray::with_capacity(nrows).to(ArrowDataType::Date32)
    }

    #[inline]
    fn push(builder: &mut Self::Builder, value: Option<NaiveDate>) {
        builder.push(value.map(naive_date_to_date32));
    }

    fn field(header: &str) -> Field {
        Field::new(header, ArrowDataType::Date32, true)
    }
}

impl ArrowAssoc for NaiveDate {
    type Builder = MutablePrimitiveArray<i32>;

    fn builder(nrows: usize) -> Self::Builder {
        MutablePrimitiveArray::with_capacity(nrows).to(ArrowDataType::Date32)
    }

    #[inline]
    fn push(builder: &mut Self::Builder, value: NaiveDate) {
        builder.push(Some(naive_date_to_date32(value)));
    }

    fn field(header: &str) -> Field {
        Field::new(header, ArrowDataType::Date32, false)
    }
}

impl ArrowAssoc for Option<NaiveDateTime> {
    type Builder = MutablePrimitiveArray<i64>;

    fn builder(nrows: usize) -> Self::Builder {
        // naive => None
        MutablePrimitiveArray::with_capacity(nrows)
            .to(ArrowDataType::Timestamp(TimeUnit::Nanosecond, None))
    }

    #[inline]
    fn push(builder: &mut Self::Builder, value: Option<NaiveDateTime>) {
        builder.push(value.map(|x| x.timestamp_nanos()));
    }

    fn field(header: &str) -> Field {
        // naive => None
        Field::new(
            header,
            ArrowDataType::Timestamp(TimeUnit::Nanosecond, None),
            true,
        )
    }
}

impl ArrowAssoc for NaiveDateTime {
    type Builder = MutablePrimitiveArray<i64>;

    fn builder(nrows: usize) -> Self::Builder {
        // naive => None
        MutablePrimitiveArray::with_capacity(nrows)
            .to(ArrowDataType::Timestamp(TimeUnit::Nanosecond, None))
    }

    fn push(builder: &mut Self::Builder, value: NaiveDateTime) {
        builder.push(Some(value).map(|x| x.timestamp_nanos()));
    }

    fn field(header: &str) -> Field {
        // naive => None
        Field::new(
            header,
            ArrowDataType::Timestamp(TimeUnit::Nanosecond, None),
            true,
        )
    }
}

impl ArrowAssoc for Option<NaiveTime> {
    type Builder = MutablePrimitiveArray<i64>;

    fn builder(nrows: usize) -> Self::Builder {
        MutablePrimitiveArray::with_capacity(nrows).to(ArrowDataType::Time64(TimeUnit::Nanosecond))
    }

    fn push(builder: &mut Self::Builder, value: Option<NaiveTime>) {
        builder.push(value.map(naive_time_to_time64_nanos));
    }

    fn field(header: &str) -> Field {
        Field::new(header, ArrowDataType::Time64(TimeUnit::Nanosecond), true)
    }
}

impl ArrowAssoc for NaiveTime {
    type Builder = MutablePrimitiveArray<i64>;

    fn builder(nrows: usize) -> Self::Builder {
        MutablePrimitiveArray::with_capacity(nrows).to(ArrowDataType::Time64(TimeUnit::Nanosecond))
    }

    fn push(builder: &mut Self::Builder, value: NaiveTime) {
        builder.push(Some(value).map(naive_time_to_time64_nanos));
    }

    fn field(header: &str) -> Field {
        Field::new(header, ArrowDataType::Time64(TimeUnit::Nanosecond), false)
    }
}

impl ArrowAssoc for Option<Vec<u8>> {
    type Builder = MutableBinaryArray<i64>;

    fn builder(nrows: usize) -> Self::Builder {
        MutableBinaryArray::with_capacity(nrows)
    }

    #[inline]
    fn push(builder: &mut Self::Builder, value: Self) {
        builder.push(value);
    }

    fn field(header: &str) -> Field {
        Field::new(header, ArrowDataType::LargeBinary, true)
    }
}

impl ArrowAssoc for Vec<u8> {
    type Builder = MutableBinaryArray<i64>;

    fn builder(nrows: usize) -> Self::Builder {
        MutableBinaryArray::with_capacity(nrows)
    }

    #[inline]
    fn push(builder: &mut Self::Builder, value: Self) {
        builder.push(Some(value));
    }

    fn field(header: &str) -> Field {
        Field::new(header, ArrowDataType::LargeBinary, false)
    }
}
