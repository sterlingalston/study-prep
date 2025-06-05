// SnowPro Core Certification Questions Array
// Questions based on comprehensive snowcore study notes

const questions = [
    // Domain 1: Architecture - Sample Questions
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
        type: 'true_false',
        question: 'Snowflake operates on a pay-as-you-go consumption model.',
        correct: true,
        explanation: 'True. Snowflake uses a consumption-based model where you only pay for compute and storage resources you actually use, handling spikes in usage efficiently.'
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
        type: 'true_false',
        question: 'External stages can point to different cloud providers than where your Snowflake account runs.',
        correct: true,
        explanation: 'True. External stages can point to Amazon S3, Google Cloud Storage, or Microsoft Azure regardless of which cloud platform your Snowflake account runs on.'
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
        type: 'true_false',
        question: 'Materialized views can contain joins, user-defined functions, and window functions.',
        correct: false,
        explanation: 'False. Materialized views have big limitations - they cannot contain joins, user-defined functions, or window functions. They are best for frequently-used result sets with infrequently changing underlying data.'
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

    // Domain 2: Security - Sample Questions  
    {
        domain: 'security',
        type: 'multiple',
        question: 'Which role is the most powerful and should be used sparingly with MFA enabled?',
        options: [
            'SYSADMIN',
            'SECURITYADMIN',
            'ACCOUNTADMIN',
            'USERADMIN'
        ],
        correct: 2,
        explanation: 'ACCOUNTADMIN is the most powerful role that can view billing, administer the entire account, and includes all other admin roles as children. Should be limited to minimum users with MFA.'
    },
    {
        domain: 'security',
        type: 'true_false',
        question: 'Multi-factor authentication (MFA) is enabled by default in Snowflake.',
        correct: false,
        explanation: 'False. MFA is not enabled by default. Users must self-enroll by going to user preferences in the dropdown menu next to their login name.'
    },
    {
        domain: 'security',
        type: 'multiple',
        question: 'Which role is specifically designed for creating and managing users and roles?',
        options: [
            'ACCOUNTADMIN',
            'SYSADMIN', 
            'USERADMIN',
            'SECURITYADMIN'
        ],
        correct: 2,
        explanation: 'USERADMIN role is specifically designed for creating roles and users and managing privileges assigned to them. It is a child of SECURITYADMIN.'
    },
    {
        domain: 'security',
        type: 'multiple',
        question: 'What is Dynamic Data Masking used for?',
        options: [
            'Data encryption at rest',
            'Hiding sensitive data from unauthorized users at query time',
            'Data compression',
            'Data replication'
        ],
        correct: 1,
        explanation: 'Dynamic Data Masking uses masking policies to obfuscate sensitive data at execution time without changing stored data, acting as a filter between users and actual data.'
    },
    {
        domain: 'security',
        type: 'multiple',
        question: 'Which feature implements row-level security in Snowflake?',
        options: [
            'Column-level security',
            'Row Access Policies',
            'Object tagging',
            'Secure views'
        ],
        correct: 1,
        explanation: 'Row Access Policies implement row-level security, allowing you to control which specific rows users can see when querying data based on their role.'
    },
    {
        domain: 'security',
        type: 'true_false',
        question: 'Data in Snowflake is always encrypted at rest and in transit by default.',
        correct: true,
        explanation: 'True. Snowflake always encrypts data at rest and in transit by default. This cannot be disabled and applies to all customer communications and stored data.'
    },
    {
        domain: 'security',
        type: 'multiple',
        question: 'What is the minimum Snowflake edition required for object tagging?',
        options: [
            'Standard',
            'Enterprise',
            'Business Critical',
            'Virtual Private Snowflake'
        ],
        correct: 1,
        explanation: 'Object tagging is a feature introduced at the Enterprise edition level and higher, used for data governance and tracking sensitive data.'
    },
    {
        domain: 'security',
        type: 'true_false',
        question: 'Future grants automatically apply privileges to objects created in the future.',
        correct: true,
        explanation: 'True. Future grants allow you to grant privileges ahead of time, automatically applying them to new objects created later without needing to re-apply privileges.'
    },
    {
        domain: 'security',
        type: 'multiple',
        question: 'What prevents users from seeing the underlying SQL definition of a view?',
        options: [
            'Dynamic Data Masking',
            'Row Access Policies',
            'Secure Views',
            'Object Tagging'
        ],
        correct: 2,
        explanation: 'Secure views prevent unauthorized access to underlying tables and business logic by hiding the view definition, though they have performance trade-offs compared to standard views.'
    },
    {
        domain: 'security',
        type: 'multiple',
        question: 'Which role can create warehouses and databases?',
        options: [
            'PUBLIC',
            'USERADMIN',
            'SYSADMIN',
            'SECURITYADMIN'
        ],
        correct: 2,
        explanation: 'SYSADMIN role can create warehouses and databases and all objects within a database (schemas, tables, views, etc.).'
    },
    {
        domain: 'security',
        type: 'multiple',
        question: 'Network policies can restrict access based on what?',
        options: [
            'User roles only',
            'Time of day only',
            'IP addresses (allowed and blocked lists)',
            'Database names only'
        ],
        correct: 2,
        explanation: 'Network policies restrict access to Snowflake accounts based on IP addresses, creating permitted lists and blocked lists of IP addresses for enhanced security.'
    },
    {
        domain: 'security',
        type: 'multiple',
        question: 'What enables outsourcing user authorization to an external identity provider?',
        options: [
            'Multi-factor authentication',
            'Network policies',
            'Federated authentication and Single sign-on (SSO)',
            'Dynamic data masking'
        ],
        correct: 2,
        explanation: 'Federated authentication allows outsourcing user authorization to external identity providers (IdPs) like Okta for centralized authentication management.'
    },

    // Domain 3: Performance - Sample Questions
    {
        domain: 'performance',
        type: 'multiple',
        question: 'How many credits per hour does an X-Large virtual warehouse consume?',
        options: [
            '8 credits',
            '16 credits',
            '32 credits', 
            '64 credits'
        ],
        correct: 1,
        explanation: 'X-Large warehouses consume 16 credits per hour. The pattern is: X-Small(1), Small(2), Medium(4), Large(8), X-Large(16), 2X-Large(32), etc.'
    },
    {
        domain: 'performance',
        type: 'true_false',
        question: 'Suspended virtual warehouses consume credits.',
        correct: false,
        explanation: 'False. Suspended warehouses consume no credits. You only pay when warehouses are actively running queries.'
    },
    {
        domain: 'performance',
        type: 'multiple',
        question: 'What is the default auto-suspend time for virtual warehouses?',
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
        question: 'Which cache is specific to a virtual warehouse and stored on SSD?',
        options: [
            'Metadata cache',
            'Result cache',
            'Local disk cache',
            'Query cache'
        ],
        correct: 2,
        explanation: 'Local disk cache is tied to specific warehouse SSD storage and caches data for improved performance on subsequent queries.'
    },
    {
        domain: 'performance',
        type: 'true_false',
        question: 'The first minute of virtual warehouse usage is always billed, regardless of actual runtime.',
        correct: true,
        explanation: 'True. Minimum billing is 1 minute, so whether a query runs for 10 seconds or 59 seconds, you pay for the full minute.'
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
        explanation: 'The maximum number of clusters in a multi-cluster warehouse is 10, allowing for significant scaling to handle high concurrency workloads.'
    },
    {
        domain: 'performance',
        type: 'multiple',
        question: 'Approximately how much does a Large warehouse cost per year at standard pricing?',
        options: [
            '$7,200',
            '$14,400',
            '$28,800',
            '$57,600'
        ],
        correct: 1,
        explanation: 'Large warehouse (8 credits/hour) costs approximately $14,400 per year at standard pricing ($200 per credit annually).'
    },
    {
        domain: 'performance',
        type: 'true_false',
        question: 'Result cache is specific to individual virtual warehouses.',
        correct: false,
        explanation: 'False. Result cache serves the entire Snowflake environment, not specific warehouses. Any user with proper privileges can benefit from cached results regardless of warehouse.'
    },
    {
        domain: 'performance',
        type: 'multiple',
        question: 'How long does the result cache store query results?',
        options: [
            '1 hour',
            '8 hours',
            '24 hours',
            '7 days'
        ],
        correct: 2,
        explanation: 'Result cache stores the result set of every query executed in the past 24 hours, allowing subsequent identical queries to be served from cache.'
    },
    {
        domain: 'performance',
        type: 'multiple',
        question: 'What indicates that virtual warehouse memory is insufficient for the workload?',
        options: [
            'High CPU usage',
            'Data spilling to local or remote storage',
            'Long query compilation time',
            'Network bottlenecks'
        ],
        correct: 1,
        explanation: 'Data spilling indicates memory is insufficient. First spills to local SSD, then to remote storage (most inefficient). Ideally avoid both, especially remote spilling.'
    },
    {
        domain: 'performance',
        type: 'multiple',
        question: 'Who can create resource monitors?',
        options: [
            'Any user',
            'SYSADMIN role only',
            'ACCOUNTADMIN role only',
            'SECURITYADMIN role only'
        ],
        correct: 2,
        explanation: 'Resource monitors can only be created by the ACCOUNTADMIN role, though access can be granted to lower-level roles after creation.'
    },
    {
        domain: 'performance',
        type: 'multiple',
        question: 'What happens when a resource monitor trigger is set to "Suspend"?',
        options: [
            'Immediately kills all running queries',
            'Prevents new queries but allows current queries to complete',
            'Only sends notifications',
            'Reduces warehouse size automatically'
        ],
        correct: 1,
        explanation: 'Suspend will not accept new queries but allows currently executing queries to complete, which may result in exceeding the threshold depending on active workload.'
    },

    // Domain 4: Data Loading - Sample Questions
    {
        domain: 'loading',
        type: 'multiple',
        question: 'What is the recommended file size for optimal bulk loading performance?',
        options: [
            '10-50 MB',
            '100-250 MB or larger (compressed)',
            '500 MB - 1 GB',
            'Over 5 GB'
        ],
        correct: 1,
        explanation: 'Snowflake recommends 100-250 MB or larger compressed files for optimal performance, allowing distribution among compute resources and minimizing processing overhead.'
    },
    {
        domain: 'loading',
        type: 'true_false',
        question: 'Snowpipe requires user-defined virtual warehouses to operate.',
        correct: false,
        explanation: 'False. Snowpipe uses serverless compute managed by Snowflake, eliminating the need for user-defined warehouses. It\'s completely managed and scales automatically.'
    },
    {
        domain: 'loading',
        type: 'multiple',
        question: 'Which command uploads files from a local machine to an internal stage?',
        options: [
            'COPY INTO',
            'PUT',
            'GET',
            'LOAD'
        ],
        correct: 1,
        explanation: 'PUT command uploads files from local machine to internal stage. Example: put file://c:\\temp\\data\\mydata.csv @~ auto_compress=true;'
    },
    {
        domain: 'loading',
        type: 'multiple',
        question: 'What is the default error handling behavior for bulk loading with COPY INTO?',
        options: [
            'CONTINUE',
            'SKIP_FILE',
            'ABORT_STATEMENT',
            'IGNORE_ERRORS'
        ],
        correct: 2,
        explanation: 'Default for bulk loading is ABORT_STATEMENT (entire load aborted on errors), while Snowpipe defaults to SKIP_FILE (skip problematic files, continue with others).'
    },
    {
        domain: 'loading',
        type: 'multiple',
        question: 'How long is load metadata stored in Snowflake?',
        options: [
            '14 days',
            '30 days',
            '64 days',
            '90 days'
        ],
        correct: 2,
        explanation: 'Load metadata is stored for 64 days, allowing tracking of loads and preventing duplicate file loads. Load history for Snowpipe is stored for 14 days.'
    },
    {
        domain: 'loading',
        type: 'multiple',
        question: 'Which file formats can Snowflake load? (Select the most complete answer)',
        options: [
            'CSV and JSON only',
            'CSV, JSON, XML only',
            'CSV, JSON, AVRO, ORC, Parquet, XML',
            'Only structured formats'
        ],
        correct: 2,
        explanation: 'Snowflake supports loading CSV, JSON, AVRO, ORC, Parquet, and XML file formats, covering both structured and semi-structured data needs.'
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
        explanation: 'Maximum file size for unloading to cloud storage is 5 GB using the MAX_FILE_SIZE copy option.'
    },
    {
        domain: 'loading',
        type: 'true_false',
        question: 'Snowpipe is designed for large batch loads of data.',
        correct: false,
        explanation: 'False. Snowpipe is designed for smaller amounts of data with frequent, near-real-time loading. For large batch loads, use bulk loading with COPY INTO.'
    },
    {
        domain: 'loading',
        type: 'multiple',
        question: 'Which copy option allows loading files even when column counts don\'t match?',
        options: [
            'SKIP_HEADER',
            'ERROR_ON_COLUMN_COUNT_MISMATCH = FALSE',
            'CONTINUE_ON_ERROR',
            'FORCE_LOAD'
        ],
        correct: 1,
        explanation: 'ERROR_ON_COLUMN_COUNT_MISMATCH = FALSE allows loading when input files have different column counts than target tables.'
    },
    {
        domain: 'loading',
        type: 'multiple',
        question: 'What does VALIDATION_MODE do in a COPY INTO command?',
        options: [
            'Validates user permissions',
            'Checks data validity without actually loading data',
            'Validates file format',
            'Checks warehouse capacity'
        ],
        correct: 1,
        explanation: 'VALIDATION_MODE allows checking the validity of a COPY INTO command without loading data, useful for testing with new files.'
    },
    {
        domain: 'loading',
        type: 'multiple',
        question: 'What command downloads files from internal stage to local machine?',
        options: [
            'COPY FROM',
            'EXPORT',
            'GET',
            'DOWNLOAD'
        ],
        correct: 2,
        explanation: 'GET command downloads files from internal stage to local machine. Example: get @~/myfiles file:///tmp/data/;'
    },
    {
        domain: 'loading',
        type: 'true_false',
        question: 'You can filter data using WHERE clauses in COPY INTO commands.',
        correct: false,
        explanation: 'False. COPY INTO commands cannot filter data using WHERE clauses or LIMIT. They support column reordering, omission, and casting, but not filtering.'
    },

    // Domain 5: Data Transformations - Sample Questions
    {
        domain: 'transformation',
        type: 'multiple',
        question: 'What is the maximum size of a VARIANT column in Snowflake?',
        options: [
            '8 MB',
            '16 MB',
            '32 MB',
            '64 MB'
        ],
        correct: 1,
        explanation: 'Maximum length of VARIANT column is 16 MB for storing semi-structured data like JSON, AVRO, Parquet, ORC, and XML.'
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
        explanation: 'HyperLogLog algorithm determines cardinality with high accuracy at a fraction of the cost compared to traditional count distinct operations for large datasets.'
    },
    {
        domain: 'transformation',
        type: 'multiple',
        question: 'Which languages can be used to write User-Defined Functions (UDFs)?',
        options: [
            'Only SQL',
            'SQL and JavaScript only',
            'Python, Java, JavaScript, and SQL',
            'Python and SQL only'
        ],
        correct: 2,
        explanation: 'Snowflake supports UDFs in Python, Java, JavaScript, and SQL, providing flexibility for different development needs and existing code bases.'
    },
    {
        domain: 'transformation',
        type: 'multiple',
        question: 'Which function converts semi-structured data to relational format?',
        options: [
            'PARSE_JSON',
            'TO_JSON',
            'FLATTEN',
            'OBJECT_CONSTRUCT'
        ],
        correct: 2,
        explanation: 'FLATTEN table function converts variant, object, or array data to relational representation, enabling BI tools to work with semi-structured data.'
    },
    {
        domain: 'transformation',
        type: 'multiple',
        question: 'What are the two types of User-Defined Functions available?',
        options: [
            'Simple and Complex',
            'Scalar and Table functions',
            'Inline and Stored',
            'Public and Private'
        ],
        correct: 1,
        explanation: 'Scalar functions return one output row per input row, while Table functions return zero, one, or many output rows per input row.'
    },
    {
        domain: 'transformation',
        type: 'multiple',
        question: 'Which algorithm is used for similarity estimation between datasets?',
        options: [
            'HyperLogLog',
            'MinHash',
            'Space-Saving',
            't-Digest'
        ],
        correct: 1,
        explanation: 'MinHash algorithm estimates similarity between datasets without computing intersection or union of sets, enabling efficient similarity comparison.'
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
        explanation: 'Use SAMPLE (100 ROWS) for fixed-size sampling to return exactly 100 rows. SAMPLE (10) would give 10% probability sampling.'
    },
    {
        domain: 'transformation',
        type: 'true_false',
        question: 'Directory tables are separate database objects that must be created manually.',
        correct: false,
        explanation: 'False. Directory tables are implicit objects layered on stages, not separate database objects. They catalog staged files automatically when enabled.'
    },

    // Domain 6: Data Protection - Sample Questions
    {
        domain: 'protection',
        type: 'multiple',
        question: 'What is the maximum time travel retention for permanent objects in Enterprise edition?',
        options: [
            '1 day',
            '7 days',
            '30 days',
            '90 days'
        ],
        correct: 3,
        explanation: 'Enterprise edition and higher support up to 90 days time travel for permanent objects. Standard edition is limited to 1 day maximum.'
    },
    {
        domain: 'protection',
        type: 'true_false',
        question: 'Cloning in Snowflake involves physical copying of data.',
        correct: false,
        explanation: 'False. Cloning is a zero-copy operation using metadata pointers. Storage costs only occur when cloned data changes from the original.'
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
        explanation: 'Fail-safe provides a non-configurable 7-day period after time travel expires. Only Snowflake employees can access fail-safe data for recovery.'
    },
    {
        domain: 'protection',
        type: 'true_false',
        question: 'Transient and temporary tables have fail-safe periods.',
        correct: false,
        explanation: 'False. Transient and temporary tables have no fail-safe period, reducing storage costs but providing less data protection than permanent tables.'
    },
    {
        domain: 'protection',
        type: 'multiple',
        question: 'What command restores accidentally dropped objects?',
        options: [
            'RESTORE',
            'RECOVER',
            'UNDROP',
            'ROLLBACK'
        ],
        correct: 2,
        explanation: 'UNDROP command restores dropped objects within the time travel retention period, eliminating need for traditional backup restoration.'
    },
    {
        domain: 'protection',
        type: 'multiple',
        question: 'Who can access data in fail-safe for recovery purposes?',
        options: [
            'Account administrators',
            'Database owners',
            'Only Snowflake employees',
            'Security administrators'
        ],
        correct: 2,
        explanation: 'Only Snowflake employees can access fail-safe data for recovery in extreme operational failures. It\'s provided on a best-effort basis.'
    },
    {
        domain: 'protection',
        type: 'multiple',
        question: 'What parameter controls time travel retention periods?',
        options: [
            'TIME_TRAVEL_DAYS',
            'DATA_RETENTION_TIME_IN_DAYS',
            'RETENTION_PERIOD',
            'TIME_TRAVEL_RETENTION'
        ],
        correct: 1,
        explanation: 'DATA_RETENTION_TIME_IN_DAYS parameter controls time travel retention. Can be set at account, database, schema, or table level.'
    },
    {
        domain: 'protection',
        type: 'true_false',
        question: 'Private Data Exchange requires all participants to have full Snowflake accounts.',
        correct: true,
        explanation: 'True. Private Data Exchange requires all data providers and consumers to have full Snowflake accounts - reader accounts cannot participate.'
    }
];

// Initialize the quiz with these questions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (typeof initializeQuizVersions === 'function') {
        initializeQuizVersions(questions);
    }
});