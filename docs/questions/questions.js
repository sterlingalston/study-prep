// SnowPro Core Certification Questions Array
// Sample questions covering all 6 domains

const questions = [
    // Domain 1: Architecture - Sample Questions
    {
        domain: 'architecture',
        type: 'multiple',
        question: 'What are the three layers of Snowflake\'s architecture?',
        options: [
            'Storage Layer, Query Processing Layer, Cloud Services Layer',
            'Database Layer, Warehouse Layer, Application Layer',
            'Data Layer, Compute Layer, Service Layer',
            'Ingestion Layer, Processing Layer, Output Layer'
        ],
        correct: 0,
        explanation: 'Snowflake\'s 3-tier architecture consists of: Storage Layer (compressed micro-partitions), Query Processing Layer (virtual warehouses), and Cloud Services Layer (authentication, metadata, query optimization).'
    },
    {
        domain: 'architecture',
        type: 'true_false',
        question: 'Snowflake operates on a pay-as-you-go consumption model.',
        correct: true,
        explanation: 'True. Snowflake uses a consumption-based model where you only pay for compute and storage resources you actually use.'
    },
    {
        domain: 'architecture',
        type: 'multiple',
        question: 'What is the uncompressed size range of micro-partitions?',
        options: [
            '10-100 MB',
            '50-500 MB',
            '100-1000 MB',
            '1-10 GB'
        ],
        correct: 1,
        explanation: 'Micro-partitions are 50-500 MB when uncompressed, stored in compressed format making them smaller in actual storage.'
    },
    {
        domain: 'architecture',
        type: 'multiple',
        question: 'Which edition supports up to 90 days of time travel?',
        options: [
            'Standard',
            'Enterprise and higher',
            'Business Critical only',
            'All editions'
        ],
        correct: 1,
        explanation: 'Enterprise edition and higher support up to 90 days of time travel, while Standard is limited to 1 day.'
    },
    {
        domain: 'architecture',
        type: 'true_false',
        question: 'External stages can point to different cloud providers than your Snowflake account.',
        correct: true,
        explanation: 'True. External stages can point to any cloud storage regardless of where your Snowflake account runs.'
    },
    {
        domain: 'architecture',
        type: 'multiple',
        question: 'What is the approximate cost per TB per month for data storage?',
        options: [
            'USD $10',
            'USD $26',
            'USD $50',
            'USD $100'
        ],
        correct: 1,
        explanation: 'AWS charges around USD $26 per TB per month for storage, which Snowflake passes on to customers.'
    },
    {
        domain: 'architecture',
        type: 'multiple',
        question: 'Which data type is best for geospatial coordinates?',
        options: [
            'VARCHAR',
            'VARIANT',
            'GEOGRAPHY',
            'OBJECT'
        ],
        correct: 2,
        explanation: 'GEOGRAPHY data type ensures maximum performance for geospatial calculations considering Earth\'s curvature.'
    },
    {
        domain: 'architecture',
        type: 'true_false',
        question: 'Snowpark supports Python, Java, and Scala.',
        correct: true,
        explanation: 'True. Snowpark enables data processing using Python, Java, and Scala languages.'
    },

    // Domain 2: Security - Sample Questions  
    {
        domain: 'security',
        type: 'multiple',
        question: 'Which role is most powerful and should be used sparingly?',
        options: [
            'SYSADMIN',
            'SECURITYADMIN', 
            'ACCOUNTADMIN',
            'USERADMIN'
        ],
        correct: 2,
        explanation: 'ACCOUNTADMIN is the most powerful role that can view billing and administer the entire account. Should be limited with MFA.'
    },
    {
        domain: 'security',
        type: 'true_false',
        question: 'Multi-factor authentication is enabled by default.',
        correct: false,
        explanation: 'False. MFA is not enabled by default - users must self-enroll through user preferences.'
    },
    {
        domain: 'security',
        type: 'multiple',
        question: 'What is Dynamic Data Masking used for?',
        options: [
            'Data encryption',
            'Hiding sensitive data from unauthorized users at query time',
            'Data compression', 
            'Data replication'
        ],
        correct: 1,
        explanation: 'Dynamic Data Masking uses policies to obfuscate sensitive data at execution time without changing stored data.'
    },
    {
        domain: 'security',
        type: 'multiple',
        question: 'Which feature controls data access at individual row level?',
        options: [
            'Column-level security',
            'Row Access Policies',
            'Object tagging',
            'Secure views'
        ],
        correct: 1,
        explanation: 'Row Access Policies implement row-level security to control which rows users can see when querying data.'
    },
    {
        domain: 'security',
        type: 'true_false',
        question: 'Data in Snowflake is always encrypted at rest and in transit.',
        correct: true,
        explanation: 'Yes, Snowflake always encrypts data at rest and in transit by default - this cannot be disabled.'
    },
    {
        domain: 'security',
        type: 'multiple',
        question: 'Which role creates users and roles?',
        options: [
            'ACCOUNTADMIN',
            'SYSADMIN',
            'USERADMIN',
            'SECURITYADMIN'
        ],
        correct: 2,
        explanation: 'USERADMIN role is specifically designed for creating and managing users and roles.'
    },
    {
        domain: 'security',
        type: 'multiple',
        question: 'What is the minimum edition for object tagging?',
        options: [
            'Standard',
            'Enterprise',
            'Business Critical',
            'Virtual Private Snowflake'
        ],
        correct: 1,
        explanation: 'Object tagging is available starting with Enterprise edition.'
    },
    {
        domain: 'security',
        type: 'true_false',
        question: 'Future grants apply privileges to objects created in the future.',
        correct: true,
        explanation: 'True. Future grants automatically apply specified privileges to new objects created later.'
    },

    // Domain 3: Performance - Sample Questions
    {
        domain: 'performance',
        type: 'multiple',
        question: 'How many credits per hour does an X-Large warehouse consume?',
        options: [
            '8 credits',
            '16 credits', 
            '32 credits',
            '64 credits'
        ],
        correct: 1,
        explanation: 'X-Large warehouses consume 16 credits per hour. Pattern: X-Small(1), Small(2), Medium(4), Large(8), X-Large(16).'
    },
    {
        domain: 'performance',
        type: 'true_false',
        question: 'Suspended warehouses consume credits.',
        correct: false,
        explanation: 'False. Suspended warehouses consume no credits - you only pay when actively running queries.'
    },
    {
        domain: 'performance',
        type: 'multiple',
        question: 'What is the default auto-suspend time?',
        options: [
            '1 minute',
            '5 minutes',
            '10 minutes', 
            '15 minutes'
        ],
        correct: 1,
        explanation: 'Default auto-suspend is 5 minutes of inactivity to optimize costs by automatically suspending idle warehouses.'
    },
    {
        domain: 'performance',
        type: 'multiple',
        question: 'Which cache is specific to a warehouse and stored on SSD?',
        options: [
            'Metadata cache',
            'Result cache',
            'Local disk cache',
            'Query cache'
        ],
        correct: 2,
        explanation: 'Local disk cache is tied to specific warehouse SSD storage and caches data for improved performance.'
    },
    {
        domain: 'performance',
        type: 'true_false',
        question: 'The first minute of warehouse usage is always billed.',
        correct: true,
        explanation: 'True. Minimum billing is 1 minute, so 10 seconds and 59 seconds cost the same.'
    },
    {
        domain: 'performance',
        type: 'multiple',
        question: 'What is the maximum number of clusters in a multi-cluster warehouse?',
        options: [
            '5',
            '8',
            '10',
            '16'
        ],
        correct: 2,
        explanation: 'The maximum number of clusters in a multi-cluster warehouse is 10.'
    },
    {
        domain: 'performance',
        type: 'multiple',
        question: 'Which warehouse size costs approximately $14,400 per year?',
        options: [
            'Medium',
            'Large',
            'X-Large',
            '2X-Large'
        ],
        correct: 1,
        explanation: 'Large warehouse (8 credits/hour) costs approximately $14,400 per year at standard pricing.'
    },
    {
        domain: 'performance',
        type: 'true_false',
        question: 'Result cache is specific to individual warehouses.',
        correct: false,
        explanation: 'False. Result cache serves the entire environment, not specific warehouses.'
    },

    // Domain 4: Data Loading - Sample Questions
    {
        domain: 'loading',
        type: 'multiple',
        question: 'What is the recommended file size for optimal loading?',
        options: [
            '10-50 MB',
            '100-250 MB or larger (compressed)',
            '500 MB - 1 GB',
            'Over 5 GB'
        ],
        correct: 1,
        explanation: 'Snowflake recommends 100-250 MB or larger compressed files for optimal performance and distribution.'
    },
    {
        domain: 'loading',
        type: 'true_false',
        question: 'Snowpipe requires user-defined virtual warehouses.',
        correct: false,
        explanation: 'False. Snowpipe uses serverless compute managed by Snowflake, eliminating need for user-defined warehouses.'
    },
    {
        domain: 'loading',
        type: 'multiple',
        question: 'Which command stages files from local machine to internal stage?',
        options: [
            'COPY INTO',
            'PUT',
            'GET',
            'LOAD'
        ],
        correct: 1,
        explanation: 'PUT command uploads files from local machine to internal stage before loading into tables.'
    },
    {
        domain: 'loading',
        type: 'multiple',
        question: 'What is the default error handling for bulk COPY INTO?',
        options: [
            'CONTINUE',
            'SKIP_FILE',
            'ABORT_STATEMENT',
            'IGNORE_ERRORS'
        ],
        correct: 2,
        explanation: 'Default for bulk loading is ABORT_STATEMENT (stops on errors), while Snowpipe defaults to SKIP_FILE.'
    },
    {
        domain: 'loading',
        type: 'multiple',
        question: 'How long is load metadata stored?',
        options: [
            '7 days',
            '14 days',
            '30 days',
            '64 days'
        ],
        correct: 3,
        explanation: 'Load metadata is stored for 64 days, allowing tracking and preventing duplicate loads.'
    },
    {
        domain: 'loading',
        type: 'multiple',
        question: 'What prefix references table stages?',
        options: [
            '@',
            '@%',
            '@~',
            '@@'
        ],
        correct: 1,
        explanation: 'Table stages use @% prefix, user stages use @~, named stages use @.'
    },
    {
        domain: 'loading',
        type: 'multiple',
        question: 'What is the maximum file size for unloading to cloud storage?',
        options: [
            '1 GB',
            '2 GB',
            '5 GB',
            '10 GB'
        ],
        correct: 2,
        explanation: 'Maximum file size for unloading to cloud storage is 5 GB using MAX_FILE_SIZE option.'
    },
    {
        domain: 'loading',
        type: 'true_false',
        question: 'Snowpipe is designed for large batch loads.',
        correct: false,
        explanation: 'False. Snowpipe is designed for smaller amounts of data with frequent, near-real-time loading.'
    },

    // Domain 5: Data Transformations - Sample Questions
    {
        domain: 'transformation',
        type: 'multiple',
        question: 'What is the maximum size of a VARIANT column?',
        options: [
            '8 MB',
            '16 MB',
            '32 MB',
            '64 MB'
        ],
        correct: 1,
        explanation: 'Maximum length of VARIANT column is 16 MB for storing semi-structured data like JSON, AVRO, Parquet, ORC, XML.'
    },
    {
        domain: 'transformation',
        type: 'multiple',
        question: 'Which algorithm does Snowflake use for cardinality estimation?',
        options: [
            'MinHash',
            'HyperLogLog',
            'Space-Saving',
            't-Digest'
        ],
        correct: 1,
        explanation: 'HyperLogLog algorithm determines cardinality at fraction of cost with high accuracy for large datasets.'
    },
    {
        domain: 'transformation',
        type: 'true_false',
        question: 'UDFs can be written in Python, Java, JavaScript, and SQL.',
        correct: true,
        explanation: 'True. Snowflake supports user-defined functions in all four languages for flexibility.'
    },
    {
        domain: 'transformation',
        type: 'multiple',
        question: 'Which function converts semi-structured to relational format?',
        options: [
            'PARSE_JSON',
            'TO_JSON',
            'FLATTEN',
            'OBJECT_CONSTRUCT'
        ],
        correct: 2,
        explanation: 'FLATTEN table function converts variant, object, or array data to relational representation.'
    },
    {
        domain: 'transformation',
        type: 'multiple',
        question: 'What are the two UDF types available?',
        options: [
            'Simple and Complex',
            'Scalar and Table functions',
            'Inline and Stored',
            'Public and Private'
        ],
        correct: 1,
        explanation: 'Scalar functions (one output per input row) and Table functions (zero, one, or many outputs per input row).'
    },
    {
        domain: 'transformation',
        type: 'multiple',
        question: 'Which algorithm is used for similarity estimation?',
        options: [
            'HyperLogLog',
            'MinHash',
            'Space-Saving',
            't-Digest'
        ],
        correct: 1,
        explanation: 'MinHash algorithm is used for estimating similarity between datasets without computing intersection or union.'
    },
    {
        domain: 'transformation',
        type: 'multiple',
        question: 'How do you sample exactly 100 rows from a table?',
        options: [
            'SELECT * FROM table SAMPLE (100)',
            'SELECT * FROM table SAMPLE (100 ROWS)',
            'SELECT * FROM table LIMIT 100',
            'SELECT * FROM table TABLESAMPLE (100 ROWS)'
        ],
        correct: 1,
        explanation: 'Use SAMPLE (100 ROWS) for fixed-size sampling to return exactly 100 rows.'
    },
    {
        domain: 'transformation',
        type: 'true_false',
        question: 'Directory tables are separate database objects.',
        correct: false,
        explanation: 'False. Directory tables are implicit objects layered on stages, not separate database objects.'
    },

    // Domain 6: Data Protection - Sample Questions
    {
        domain: 'protection',
        type: 'multiple',
        question: 'What is maximum time travel retention for permanent objects in Enterprise?',
        options: [
            '1 day',
            '7 days',
            '30 days',
            '90 days'
        ],
        correct: 3,
        explanation: 'Enterprise edition and higher support up to 90 days time travel for permanent objects, Standard limited to 1 day.'
    },
    {
        domain: 'protection',
        type: 'true_false',
        question: 'Cloning involves physical copying of data.',
        correct: false,
        explanation: 'False. Cloning is zero-copy operation using metadata pointers - storage costs only occur when data changes.'
    },
    {
        domain: 'protection',
        type: 'multiple',
        question: 'How long is the fail-safe period for permanent objects?',
        options: [
            '1 day',
            '7 days (non-configurable)',
            '14 days',
            '30 days'
        ],
        correct: 1,
        explanation: 'Fail-safe provides non-configurable 7-day period after time travel expires, accessible only by Snowflake employees.'
    },
    {
        domain: 'protection',
        type: 'true_false',
        question: 'Transient and temporary tables have fail-safe periods.',
        correct: false,
        explanation: 'False. Transient and temporary tables have no fail-safe period, reducing storage costs but less protection.'
    },
    {
        domain: 'protection',
        type: 'multiple',
        question: 'What command restores dropped objects?',
        options: [
            'RESTORE',
            'RECOVER',
            'UNDROP',
            'ROLLBACK'
        ],
        correct: 2,
        explanation: 'UNDROP command restores dropped objects within time travel retention period.'
    },
    {
        domain: 'protection',
        type: 'multiple',
        question: 'Who can access data in fail-safe?',
        options: [
            'Account administrators',
            'Database owners',
            'Only Snowflake employees',
            'Security administrators'
        ],
        correct: 2,
        explanation: 'Only Snowflake employees can access fail-safe data for recovery in extreme operational failures.'
    },
    {
        domain: 'protection',
        type: 'multiple',
        question: 'What parameter controls time travel retention?',
        options: [
            'TIME_TRAVEL_DAYS',
            'DATA_RETENTION_TIME_IN_DAYS',
            'RETENTION_PERIOD',
            'TIME_TRAVEL_RETENTION'
        ],
        correct: 1,
        explanation: 'DATA_RETENTION_TIME_IN_DAYS parameter controls time travel retention period for objects.'
    },
    {
        domain: 'protection',
        type: 'true_false',
        question: 'Private Data Exchange requires full Snowflake accounts.',
        correct: true,
        explanation: 'True. Private Data Exchange requires all participants to have full Snowflake accounts, not reader accounts.'
    }
];

// Initialize the quiz with these questions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (typeof initializeQuizVersions === 'function') {
        initializeQuizVersions(questions);
    }
});