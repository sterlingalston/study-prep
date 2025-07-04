// SnowPro Core Certification Questions Array
// Additional questions extracted from snowcore notes PDF - covering topics not in other versions

const questions = [
    // Domain 1: Architecture - Advanced Topics
    {
        domain: 'architecture',
        type: 'multiple',
        question: 'How often does Snowflake aim to release new features using their three-phase release process?',
        options: [
            'Daily',
            'Weekly',
            'Monthly',
            'Quarterly'
        ],
        correct: 1,
        explanation: 'Snowflake uses a three-phase new feature release process that aims to release features weekly to continuously improve the platform.'
    },
    {
        domain: 'architecture',
        type: 'true_false',
        question: 'The SNOWFLAKE database is a read-only, shared database that exists in every Snowflake account.',
        correct: true,
        explanation: 'True. The SNOWFLAKE database exists in every account and is imported from a share named ACCOUNT_USAGE. It stores metadata and historical usage metrics.'
    },
    {
        domain: 'architecture',
        type: 'multiple',
        question: 'What is the key difference in data latency between ACCOUNT_USAGE and INFORMATION_SCHEMA?',
        options: [
            'ACCOUNT_USAGE has zero latency, INFORMATION_SCHEMA has 45 mins to 3 hours',
            'ACCOUNT_USAGE has 45 mins to 3 hours, INFORMATION_SCHEMA has zero latency',
            'Both have zero latency',
            'Both have the same latency'
        ],
        correct: 1,
        explanation: 'ACCOUNT_USAGE views have latency between 45 minutes to 3 hours, while INFORMATION_SCHEMA has zero latency but less historical data retention.'
    },
    {
        domain: 'architecture',
        type: 'multiple',
        question: 'For tables less than what size is there generally no need to define a clustering key?',
        options: [
            '100 GB',
            '500 GB',
            '1 TB',
            '5 TB'
        ],
        correct: 2,
        explanation: 'Generally, there\'s no need to define a clustering key for tables less than 1 TB. Natural clustering based on data loading order is usually sufficient.'
    },
    {
        domain: 'architecture',
        type: 'multiple',
        question: 'How many phases does query pruning have in Snowflake?',
        options: [
            'One phase',
            'Two phases',
            'Three phases',
            'Four phases'
        ],
        correct: 1,
        explanation: 'Query pruning has two phases: 1) Using metadata to locate relevant micro-partitions, 2) Reading partition headers to identify relevant columns.'
    },
    {
        domain: 'architecture',
        type: 'multiple',
        question: 'What are external functions commonly used for?',
        options: [
            'Data storage only',
            'Machine learning models, geocoding, and API services',
            'User authentication only',
            'Data encryption only'
        ],
        correct: 1,
        explanation: 'External functions are used to access external API services, such as machine learning models or geocoding functionality, allowing data exchange with external systems.'
    },
    {
        domain: 'architecture',
        type: 'multiple',
        question: 'Which table type does NOT persist after the session ends?',
        options: [
            'Permanent tables',
            'Temporary tables',
            'Transient tables',
            'External tables'
        ],
        correct: 1,
        explanation: 'Temporary tables only persist for the duration of the session and are only available to that user session. Once the session ends, the table is dropped.'
    },
    {
        domain: 'architecture',
        type: 'true_false',
        question: 'Materialized views in Snowflake can contain joins and user-defined functions.',
        correct: false,
        explanation: 'False. Materialized views have big limitations - they cannot contain joins, user-defined functions, or window functions.'
    },
    {
        domain: 'architecture',
        type: 'multiple',
        question: 'What is Streamlit in Snowflake used for?',
        options: [
            'Data loading only',
            'Building and deploying custom web apps for ML and data science',
            'User authentication only',
            'Data encryption only'
        ],
        correct: 1,
        explanation: 'Streamlit in Snowflake helps developers securely build, deploy, and share custom web apps for machine learning and data science directly on Snowflake\'s data cloud.'
    },

    // Domain 2: Security - Advanced Topics
    {
        domain: 'security',
        type: 'multiple',
        question: 'From which share is the SNOWFLAKE database imported?',
        options: [
            'SYSTEM_USAGE',
            'ACCOUNT_USAGE',
            'DATA_USAGE',
            'METADATA_USAGE'
        ],
        correct: 1,
        explanation: 'The SNOWFLAKE database is imported from a share named ACCOUNT_USAGE when your Snowflake account is provisioned.'
    },
    {
        domain: 'security',
        type: 'multiple',
        question: 'How long does ACCOUNT_USAGE retain historical data compared to INFORMATION_SCHEMA?',
        options: [
            'ACCOUNT_USAGE: 7 days, INFORMATION_SCHEMA: 1 year',
            'ACCOUNT_USAGE: 1 year, INFORMATION_SCHEMA: 7 days to 6 months',
            'Both retain data for 1 year',
            'Both retain data for 7 days'
        ],
        correct: 1,
        explanation: 'ACCOUNT_USAGE retains historical data for 1 year, while INFORMATION_SCHEMA retains data for 7 days to 6 months depending on the view or table function.'
    },
    {
        domain: 'security',
        type: 'multiple',
        question: 'How many steps are required to implement row-level security using row access policies?',
        options: [
            'Two steps',
            'Three steps',
            'Four steps',
            'Five steps'
        ],
        correct: 1,
        explanation: 'Row-level security requires three steps: 1) Define a policy and optionally define a mapping table, 2) Apply the policy to one or more tables, 3) Query the data.'
    },
    {
        domain: 'security',
        type: 'true_false',
        question: 'Network Rules were recently introduced to logically group network identifiers.',
        correct: true,
        explanation: 'True. Network Rules have been recently introduced to logically group together network identifiers, making it easier to manage networking policies and rules.'
    },
    {
        domain: 'security',
        type: 'multiple',
        question: 'What does federated authentication allow you to outsource?',
        options: [
            'Data storage',
            'User authorization to an external identity provider',
            'Query processing',
            'Data encryption'
        ],
        correct: 1,
        explanation: 'Federated authentication allows you to outsource user authorization from Snowflake to an external identity provider (IdP) such as Okta for centralized authentication.'
    },
    {
        domain: 'security',
        type: 'multiple',
        question: 'Which two methods implement column-level security?',
        options: [
            'Row access policies and object tagging',
            'Dynamic data masking and external tokenization',
            'Network policies and secure views',
            'Federated authentication and MFA'
        ],
        correct: 1,
        explanation: 'Column-level security is implemented using dynamic data masking (masking policies) and external tokenization for protecting sensitive data in columns.'
    },

    // Domain 3: Performance - Advanced Topics
    {
        domain: 'performance',
        type: 'multiple',
        question: 'How many credits per hour does a 4X-Large warehouse consume?',
        options: [
            '64 credits',
            '128 credits',
            '256 credits',
            '512 credits'
        ],
        correct: 1,
        explanation: 'A 4X-Large warehouse consumes 128 credits per hour. The progression is: 3XL(64), 4XL(128), 5XL(256), 6XL(512).'
    },
    {
        domain: 'performance',
        type: 'true_false',
        question: 'Snowflake allows automatic scaling up and down between different virtual warehouse sizes.',
        correct: false,
        explanation: 'False. Snowflake allows automatic scaling out (adding clusters) but does not allow automatic scaling up and down between different warehouse sizes.'
    },
    {
        domain: 'performance',
        type: 'multiple',
        question: 'What does Query Acceleration Service (QAS) help with?',
        options: [
            'Only large queries',
            'Only small queries',
            'Unpredictable workloads with mixed query sizes',
            'Data loading only'
        ],
        correct: 2,
        explanation: 'QAS helps with unpredictable workloads that include short-running queries alongside large, intensive queries by offloading large table scans and finding the right fit of resources.'
    },
    {
        domain: 'performance',
        type: 'multiple',
        question: 'How long are query results stored in the result cache?',
        options: [
            '1 hour',
            '8 hours',
            '24 hours',
            '72 hours'
        ],
        correct: 2,
        explanation: 'The result cache stores the result set of every query executed in the past 24 hours for potential reuse by subsequent matching queries.'
    },
    {
        domain: 'performance',
        type: 'true_false',
        question: 'Result cache is invalidated if the underlying data changes.',
        correct: true,
        explanation: 'True. If the underlying data that makes up the result set changes, the cached result is invalidated. Snowflake knows which micro-partitions make up the result set.'
    },
    {
        domain: 'performance',
        type: 'multiple',
        question: 'What indicates more serious performance issues: data spilling to local storage or remote storage?',
        options: [
            'Local storage spilling is worse',
            'Remote storage spilling is worse',
            'Both are equally bad',
            'Neither affects performance'
        ],
        correct: 1,
        explanation: 'Remote storage spilling is significantly worse than local storage spilling. You should primarily look out for anything spilling to remote storage as it\'s much slower.'
    },
    {
        domain: 'performance',
        type: 'multiple',
        question: 'When is Search Optimization Service most beneficial?',
        options: [
            'When filtering on clustering keys',
            'When filtering on non-clustering key columns',
            'For data loading operations',
            'For user management'
        ],
        correct: 1,
        explanation: 'Search Optimization Service helps when filters are on columns other than the clustering key, where the query optimizer might need to scan all available partitions.'
    },
    {
        domain: 'performance',
        type: 'true_false',
        question: 'Suspending a virtual warehouse will clear out the result cache.',
        correct: false,
        explanation: 'False. Result cache is not specific to individual warehouses - it serves the whole environment. Suspending a warehouse does not clear the result cache.'
    },

    // Domain 4: Data Loading - Advanced Topics
    {
        domain: 'loading',
        type: 'multiple',
        question: 'What are the two distinct phases for loading data into Snowflake?',
        options: [
            'Compress and load',
            'Staging the data and loading into a table',
            'Validate and execute',
            'Format and transfer'
        ],
        correct: 1,
        explanation: 'Loading data has two phases: Phase 1 involves staging the data (uploading to a location Snowflake can access), Phase 2 involves loading from staging area into tables.'
    },
    {
        domain: 'loading',
        type: 'multiple',
        question: 'At what minimum intervals should files be staged for maximum efficiency?',
        options: [
            '30 seconds',
            '1 minute',
            '5 minutes',
            '15 minutes'
        ],
        correct: 1,
        explanation: 'Snowflake recommends staging files at a minimum of one-minute intervals for maximum efficiency along with 100-250 MB+ file sizes.'
    },
    {
        domain: 'loading',
        type: 'true_false',
        question: 'Snowpipe is essentially a COPY INTO command wrapped into a CREATE PIPE statement.',
        correct: true,
        explanation: 'True. Snowpipe is a COPY INTO command wrapped into a CREATE PIPE statement, providing serverless continuous data loading.'
    },
    {
        domain: 'loading',
        type: 'multiple',
        question: 'How long is Snowpipe load history metadata stored?',
        options: [
            '7 days',
            '14 days',
            '30 days',
            '64 days'
        ],
        correct: 1,
        explanation: 'Snowpipe load history metadata is stored for 14 days, while general load metadata for tables is stored for 64 days.'
    },
    {
        domain: 'loading',
        type: 'multiple',
        question: 'Which file formats can only be loaded (not unloaded) in Snowflake?',
        options: [
            'CSV and JSON',
            'AVRO, ORC, and XML',
            'Parquet and JSON',
            'All formats can be both loaded and unloaded'
        ],
        correct: 1,
        explanation: 'AVRO, ORC, and XML can only be loaded into Snowflake. CSV, JSON, and Parquet support both loading and unloading operations.'
    },
    {
        domain: 'loading',
        type: 'multiple',
        question: 'What is the recommended file organization pattern for international company data?',
        options: [
            'All files in one directory',
            'Organize by file size',
            'Country/City/Year/Month/Day structure',
            'Random organization'
        ],
        correct: 2,
        explanation: 'Snowflake recommends partitioning data into logical paths like Canada/Toronto/2022/07/03 with geographical location and date identifiers.'
    },
    {
        domain: 'loading',
        type: 'true_false',
        question: 'COPY INTO commands can filter data using WHERE clauses.',
        correct: false,
        explanation: 'False. COPY INTO commands cannot filter data using WHERE clauses or LIMIT. They support column reordering, omission, and casting only.'
    },
    {
        domain: 'loading',
        type: 'multiple',
        question: 'What option controls behavior when strings need to be distinguished from NULL values?',
        options: [
            'field_optionally_enclosed_by',
            'empty_field_as_null',
            'Both field_optionally_enclosed_by and empty_field_as_null',
            'null_string_handling'
        ],
        correct: 2,
        explanation: 'Both field_optionally_enclosed_by (for string enclosing) and empty_field_as_null (FALSE to distinguish empty strings from NULLs) are needed to properly handle empty strings vs NULL values.'
    },

    // Domain 5: Data Transformations - Advanced Topics
    {
        domain: 'transformation',
        type: 'multiple',
        question: 'Which algorithm does Snowflake use for frequency estimation?',
        options: [
            'HyperLogLog',
            'MinHash',
            'Space-Saving',
            't-Digest'
        ],
        correct: 2,
        explanation: 'Snowflake uses the Space-Saving algorithm for frequency estimation - a space-and-time-efficient way of estimating approximate frequent values in datasets.'
    },
    {
        domain: 'transformation',
        type: 'multiple',
        question: 'Which algorithm is used for percentage estimation in Snowflake?',
        options: [
            'HyperLogLog',
            'MinHash',
            'Space-Saving',
            't-Digest'
        ],
        correct: 3,
        explanation: 't-Digest algorithm is used for percentage estimation - a space and time-efficient way of estimating approximate percentile values in datasets.'
    },
    {
        domain: 'transformation',
        type: 'multiple',
        question: 'What command enables directory tables on a stage?',
        options: [
            'CREATE DIRECTORY TABLE',
            'ALTER STAGE SET DIRECTORY = (ENABLE = TRUE)',
            'ENABLE DIRECTORY ON STAGE',
            'Directory tables are enabled by default'
        ],
        correct: 1,
        explanation: 'Use ALTER STAGE my_stage_name SET DIRECTORY = (ENABLE = TRUE) to enable directory tables that catalog staged files.'
    },
    {
        domain: 'transformation',
        type: 'multiple',
        question: 'What is the syntax for 10% probability table sampling?',
        options: [
            'SELECT * FROM table SAMPLE (10 ROWS)',
            'SELECT * FROM table SAMPLE (10)',
            'SELECT * FROM table SAMPLE (0.1)',
            'SELECT * FROM table SAMPLE PERCENT (10)'
        ],
        correct: 1,
        explanation: 'Use SAMPLE (10) for 10% probability sampling where each row has a 10% chance of being included. SAMPLE (10 ROWS) would return exactly 10 rows.'
    },
    {
        domain: 'transformation',
        type: 'true_false',
        question: 'SQL supports looping and branching logic in stored procedures.',
        correct: false,
        explanation: 'False. SQL doesn\'t support looping and branching logic in stored procedures, but JavaScript, Python, Java, and Scala do support these programming constructs.'
    },
    {
        domain: 'transformation',
        type: 'multiple',
        question: 'Which function constructs an object from input data?',
        options: [
            'PARSE_JSON',
            'TO_JSON',
            'OBJECT_CONSTRUCT',
            'FLATTEN'
        ],
        correct: 2,
        explanation: 'OBJECT_CONSTRUCT() function constructs an object from the data you input, useful for converting relational data to JSON format easily.'
    },

    // Domain 6: Data Protection - Advanced Topics
    {
        domain: 'protection',
        type: 'multiple',
        question: 'What is the default time travel retention for permanent objects in Standard edition?',
        options: [
            '0 days',
            '1 day',
            '7 days',
            '90 days'
        ],
        correct: 1,
        explanation: 'In Standard edition, the default time travel retention is 1 day for permanent objects. Enterprise and higher can go up to 90 days.'
    },
    {
        domain: 'protection',
        type: 'true_false',
        question: 'Fail-safe is provided on a best-endeavor basis and should not be relied upon for disaster recovery.',
        correct: true,
        explanation: 'True. Snowflake states that fail-safe is provided on a best-endeavor basis, meaning you should not rely on this as part of a disaster recovery scenario.'
    },
    {
        domain: 'protection',
        type: 'multiple',
        question: 'Which objects CANNOT be cloned in Snowflake?',
        options: [
            'Tables and streams',
            'Internal stages and views (directly)',
            'External stages and file formats',
            'Databases and schemas'
        ],
        correct: 1,
        explanation: 'Internal (Snowflake) stages cannot be cloned, and views cannot be cloned directly (though they will be cloned if contained within a database or schema being cloned).'
    },
    {
        domain: 'protection',
        type: 'multiple',
        question: 'What happens to tasks when a database or schema is cloned?',
        options: [
            'Tasks run immediately with the same schedule',
            'Tasks are suspended by default and must be resumed manually',
            'Tasks are deleted',
            'Tasks cannot be cloned'
        ],
        correct: 1,
        explanation: 'Tasks in clones are suspended by default, and you must execute the ALTER TASK...RESUME statement to activate them.'
    },
    {
        domain: 'protection',
        type: 'multiple',
        question: 'What command shows the history of dropped tables?',
        options: [
            'SHOW TABLES',
            'SHOW TABLES HISTORY',
            'SHOW DROPPED TABLES',
            'SHOW TABLE HISTORY'
        ],
        correct: 1,
        explanation: 'Use SHOW TABLES HISTORY to list dropped objects. You can also use SHOW SCHEMAS HISTORY or SHOW DATABASES HISTORY for other object types.'
    },
    {
        domain: 'protection',
        type: 'true_false',
        question: 'Reader accounts can participate in Private Data Exchange.',
        correct: false,
        explanation: 'False. Private Data Exchange requires all data providers and data consumers to have full Snowflake accounts - reader accounts cannot participate.'
    },
    {
        domain: 'protection',
        type: 'multiple',
        question: 'How is storage usage calculated for time travel and fail-safe?',
        options: [
            'Fixed rate per table',
            'Based on total database size',
            'As a percentage of overall table size versus modified records',
            'Flat fee per account'
        ],
        correct: 2,
        explanation: 'Storage usage is calculated as a percentage of the overall table size versus those records that have been modified, except for drop/truncate operations which store entire copies.'
    },
    {
        domain: 'protection',
        type: 'multiple',
        question: 'Which two databases are available by default as inbound shares in every Snowflake account?',
        options: [
            'SYSTEM and PUBLIC',
            'SNOWFLAKE and SNOWFLAKE_SAMPLE_DATA',
            'ACCOUNT and METADATA',
            'SAMPLE and DEMO'
        ],
        correct: 1,
        explanation: 'By default, every Snowflake account has two inbound share databases: SNOWFLAKE (metadata/usage) and SNOWFLAKE_SAMPLE_DATA (sample datasets).'
    }
];

// Initialize the quiz with these questions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (typeof initializeQuizVersions === 'function') {
        initializeQuizVersions(questions);
    }
});