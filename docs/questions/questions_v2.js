// SnowPro Core Certification Questions Array
// Comprehensive questions based on snowcore notes study material

const questions = [
    // Domain 1: Architecture - 15 Questions
    {
        domain: 'architecture',
        type: 'multiple',
        question: 'What are the three layers of Snowflake\'s architecture (the "Mailroom" model)?',
        options: [
            'Storage Layer, Query Processing Layer, Cloud Services Layer',
            'Database Layer, Warehouse Layer, Application Layer', 
            'Data Layer, Compute Layer, Service Layer',
            'Ingestion Layer, Processing Layer, Output Layer'
        ],
        correct: 0,
        explanation: 'Snowflake\'s 3-tier "Mailroom" architecture consists of: Storage Layer (compressed micro-partitions), Query Processing Layer (virtual warehouses providing CPU/RAM), and Cloud Services Layer (authentication, metadata, query optimization).'
    },
    {
        domain: 'architecture',
        type: 'multiple',
        question: 'What is the uncompressed size range of micro-partitions in Snowflake?',
        options: [
            '10-100 MB',
            '50-500 MB',
            '100-1000 MB',
            '1-10 GB'
        ],
        correct: 1,
        explanation: 'Micro-partitions are 50-500 MB when uncompressed. They are stored in compressed, native format making them much smaller in actual storage.'
    },
    {
        domain: 'architecture',
        type: 'multiple',
        question: 'Which Snowflake edition supports up to 90 days of time travel?',
        options: [
            'Standard',
            'Enterprise and higher',
            'Business Critical only', 
            'All editions'
        ],
        correct: 1,
        explanation: 'Enterprise edition and higher support up to 90 days of time travel. Standard edition is limited to 1 day maximum.'
    },
    {
        domain: 'architecture',
        type: 'multiple',
        question: 'What is the approximate monthly cost per TB for data storage in Snowflake?',
        options: [
            'USD $10',
            'USD $26',
            'USD $50',
            'USD $100'
        ],
        correct: 1,
        explanation: 'AWS charges around USD $26 per TB per month for storage, which Snowflake passes on to customers. This varies by region and storage class.'
    },
    {
        domain: 'architecture',
        type: 'multiple',
        question: 'Which data type should be used for storing geospatial coordinates (longitude/latitude)?',
        options: [
            'VARCHAR',
            'VARIANT',
            'GEOGRAPHY',
            'OBJECT'
        ],
        correct: 2,
        explanation: 'GEOGRAPHY data type ensures maximum performance for geospatial calculations by considering Earth\'s curvature. Don\'t store geospatial data in VARCHAR, VARIANT, or NUMBER columns.'
    },
    {
        domain: 'architecture',
        type: 'true_false',
        question: 'External stages can point to different cloud providers than where your Snowflake account runs.',
        correct: true,
        explanation: 'True. External stages can point to Amazon S3, Google Cloud Storage, or Microsoft Azure regardless of which cloud platform your Snowflake account runs on.'
    },
    {
        domain: 'architecture',
        type: 'multiple',
        question: 'What prefix is used to reference a user stage?',
        options: [
            '@',
            '@%',
            '@~', 
            '@@'
        ],
        correct: 2,
        explanation: 'User stages use @~ prefix, table stages use @%, and named internal stages use @.'
    },
    {
        domain: 'architecture',
        type: 'multiple',
        question: 'Which table type does NOT have a fail-safe period?',
        options: [
            'Permanent tables',
            'Temporary tables',
            'External tables',
            'All tables have fail-safe'
        ],
        correct: 1,
        explanation: 'Temporary and transient tables do not have a fail-safe period, which reduces storage costs but provides less data protection than permanent tables.'
    },
    {
        domain: 'architecture',
        type: 'true_false',
        question: 'Materialized views can contain joins, user-defined functions, and window functions.',
        correct: false,
        explanation: 'False. Materialized views have big limitations - they cannot contain joins, user-defined functions, or window functions. They are best for frequently-used result sets with infrequently changing underlying data.'
    },
    {
        domain: 'architecture',
        type: 'multiple',
        question: 'What does Snowpark allow developers to do?',
        options: [
            'Only query data using SQL',
            'Write custom code in Scala, Java, and Python and push logic to where data lives',
            'Only create visualizations',
            'Only manage user accounts'
        ],
        correct: 1,
        explanation: 'Snowpark enables data engineers and data scientists to write custom code in Scala, Java, and Python, pushing processing logic down to where the data resides in Snowflake.'
    },
    {
        domain: 'architecture',
        type: 'multiple',
        question: 'Which is the newest web UI for Snowflake?',
        options: [
            'Classic Web UI',
            'Snowsight',
            'SnowSQL',
            'Streamlit'
        ],
        correct: 1,
        explanation: 'Snowsight is the newest, next-generation web interface that contains all Classic Web UI features plus new capabilities like data visualization, dashboards, and filters.'
    },
    {
        domain: 'architecture',
        type: 'true_false',
        question: 'Snowflake operates on a pay-as-you-go consumption model.',
        correct: true,
        explanation: 'True. Snowflake uses a consumption-based model where you only pay for compute and storage resources you actually use, handling spikes in usage efficiently.'
    },
    {
        domain: 'architecture',
        type: 'multiple',
        question: 'What type of database architecture does Snowflake use for optimal analytical performance?',
        options: [
            'Row-oriented (OLTP)',
            'Column-oriented (OLAP)',
            'Document-oriented',
            'Graph-oriented'
        ],
        correct: 1,
        explanation: 'Snowflake uses column-oriented storage which achieves better compression and is optimized for analytical processing (OLAP) rather than transactional processing (OLTP).'
    },
    {
        domain: 'architecture',
        type: 'multiple',
        question: 'What enables efficient query pruning in Snowflake?',
        options: [
            'Indexes',
            'Metadata stored about micro-partitions',
            'Manual partitioning',
            'Query hints'
        ],
        correct: 1,
        explanation: 'Query pruning uses metadata captured about micro-partitions to target only relevant partitions, significantly reducing execution time by avoiding unnecessary data scanning.'
    },
    {
        domain: 'architecture',
        type: 'multiple',
        question: 'Which feature releases new functionality weekly in Snowflake?',
        options: [
            'One-phase release process',
            'Two-phase release process', 
            'Three-phase release process',
            'Four-phase release process'
        ],
        correct: 2,
        explanation: 'Snowflake uses a three-phase new feature release process that aims to relea