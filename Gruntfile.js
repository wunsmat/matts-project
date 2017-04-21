var config = require('config').grunt;
//Load external parameters using config node module
module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        package: grunt.file.readJSON('package.json'),
        ports: config.ports,
        folders: config.folders,
        files: config.files,
        deployed: {
            assets: config.folders.assets.split('/')[1],
            images: config.files.images.split('/')[0],
            fonts: config.files.fonts.split('/')[0]
        },
        benchmark: {
            options: { displayResults: true },
            all: {
                src: ['<%= folders.test %>/benchmarks/*.js'],
                dest: '<%= folders.reports %>/benchmarks/results.csv'
            }
        },
        browserSync: {
            main: {
                bsFiles: {
                    src: [
                        '<%= folders.app %>/<%= files.index %>',
                        '<%= folders.app %>/style.css',
                        '<%= folders.app %>/templates.js'
                    ]
                },
                options: {
                    port: '<%= ports.server %>',
                    watchTask: true,
                    reloadDelay: 500,
                    server: {
                        baseDir: ['<%= folders.app %>'],
                        routes: {
                            '/node_modules': './node_modules',
                            '/assets': '<%= folders.assets %>'
                        },
                        index: '<%= files.index %>'
                    }
                }
            },
            demo: {
                options: {
                    port: '<%= ports.server %>',
                    server: [
                        '<%= folders.dist %>',
                        '<%= folders.dist %>/<%= folders.client %>'
                    ]
                }
            }
        },
        clean: {
            options: { force: true },
            docs: [
                '<%= folders.reports %>/<%= folders.docs %>/*',
                './styleguide'
            ],
            coverage: ['<%= folders.reports %>/<%= folders.coverage %>/'],
            compile: [
                '<%= folders.app %>/templates.js',
                '<%= folders.app %>/style.css',
                '<%= folders.app %>/style.css.map'
            ],
            build: [
                '<%= folders.dist %>/<%= folders.client %>',
                '<%= folders.dist %>/<%= deployed.assets %>'
            ]
        },
        copy: {
            fonts: {
                files: [{
                        expand: true,
                        flatten: true,
                        src: ['<%= folders.assets %>/<%= files.fonts %>'],
                        dest: '<%= folders.dist %>/<%= deployed.assets %>/<%= deployed.fonts %>',
                        filter: 'isFile'
                    }]
            },
            library: {
                files: [{
                        expand: true,
                        flatten: true,
                        src: ['<%= folders.assets %>/library/*.js'],
                        dest: '<%= folders.dist %>/<%= deployed.assets %>/library',
                        filter: 'isFile'
                    }]
            },
            images: {
                files: [{
                        expand: true,
                        flatten: false,
                        src: ['<%= folders.assets %>/<%= files.images %>'],
                        dest: '<%= folders.dist %>',
                        filter: 'isFile'
                    }]
            }
        },
        coveralls: {
            options: {
                // LCOV coverage file relevant to every target
                coverageDir: '<%= folders.reports %>/<%= folders.coverage %>/',
                recursive: true,
                force: true
            }
        },
        eslint: {
            options: { configFile: '<%= files.config.eslint %>' },
            ing: {
                options: { fix: true },
                src: [
                    '<%= folders.app %>/<%= files.scripts %>',
                    '!<%= folders.app %>/templates.js'
                ]
            },
            src: {
                options: { fix: false },
                src: [
                    '<%= folders.app %>/<%= files.scripts %>',
                    '!<%= folders.app %>/templates.js'
                ]
            },
            tests: {
                options: { fix: true },
                src: ['<%= folders.test %>/<%= folders.specs %>/<%= files.scripts %>']
            }
        },
        jsdoc: {
            app: {
                src: [
                    '<%= folders.app %>/<%= files.scripts %>',
                    '!<%= folders.app %>/templates.js'
                ],
                dest: '<%= folders.reports %>/<%= folders.docs %>',
                options: { readme: 'README.md' }
            }
        },
        jsinspect: {
            app: { src: ['<%= folders.app %>/<%= files.scripts %>'] },
            models: { src: ['<%= folders.app %>/<%= files.models %>'] },
            views: { src: ['<%= folders.app %>/<%= files.views %>'] },
            controllers: { src: ['<%= folders.app %>/<%= files.controllers %>'] }
        },
        jsonlint: {
            project: {
                src: [
                    './*.json',
                    '<%= files.config.csslint %>'
                ]
            }
        },
        karma: {
            options: {
                configFile: '<%= files.config.karma %>',
                port: '<%= ports.karma %>'
            },
            watch: {
                background: true,
                singleRun: false,
                coverageReporter: {
                    dir: '<%= folders.reports %>/<%= folders.coverage %>/',
                    includeAllSources: true
                }
            },
            coverage: {
                autoWatch: false,
                browsers: ['PhantomJS'],
                reporters: [
                    'spec',
                    'coverage'
                ]
            },
            covering: {
                autoWatch: true,
                singleRun: false,
                browsers: ['Firefox'],
                reporters: [
                    'progress',
                    'coverage'
                ]
            }
        },
        open: {
            browser: { path: 'http://localhost:<%= ports.server %>/<%= folders.app %>' },
            demo: { path: 'http://localhost:<%= ports.server %>/<%= folders.dist %>/<%= folders.client %>' },
            coverage: { path: __dirname + '/<%= folders.reports %>/<%= folders.coverage %>/report-html/index.html' },
            plato: { path: __dirname + '/<%= folders.reports %>/plato/index.html' },
            docs: { path: __dirname + '/<%= folders.reports %>/<%= folders.docs %>/index.html' },
            styleguide: { path: __dirname + '/styleguide/index.html' }
        },
        plato: {
            app: {
                src: [
                    '<%= folders.app %>/<%= files.scripts %>',
                    '!<%= folders.app %>/templates.js'
                ],
                dest: '<%= folders.reports %>/plato',
                options: { eslint: require(config.files.config.eslint) }
            }
        },
        requirejs: {
            bundle: {
                options: {
                    out: '<%= folders.dist %>/<%= folders.client %>/<%= files.configScript %>',
                    mainConfigFile: '<%= folders.app %>/<%= files.configScript %>',
                    baseUrl: '<%= folders.app %>',
                    include: ['<%= files.configScript %>'],
                    preserveLicenseComments: false,
                    findNestedDependencies: true,
                    optimize: 'uglify2',
                    uglify2: {
                        output: {
                            comments: false,
                            preamble: '/* <%= package.name %> - v<%= package.version %> - ' + '2016-02-07 */'
                        },
                        compress: {
                            drop_console: true    //discard calls to console.* functions
                        }
                    }
                }
            }
        },
        watch: {
            style: {
                files: ['<%= folders.assets %>/<%= files.styles %>'],
                tasks: [
                    'process-styles',
                    'csslint'
                ],
                options: { spawn: false }
            },
            eslint: {
                files: '<%= folders.app %>/<%= files.scripts %>',
                tasks: ['eslint:ing'],
                options: { spawn: false }
            },
            lint: {
                files: [
                    '<%= folders.app %>/style.css',
                    //CSS
                    '<%= folders.app %>/<%= files.scripts %>'    //Scripts
                ],
                tasks: ['lint'],
                options: { spawn: false }
            },
            browser: {
                files: [
                    '<%= folders.app %>/<%= files.index %>',
                    '<%= folders.assets %>/css/*.css',
                    '<%= folders.app %>/style.css',
                    '<%= folders.app %>/<%= files.scripts %>',
                    '<%= folders.assets %>/<%= files.templates %>'
                ],
                tasks: ['compile'],
                options: { spawn: false }
            }
        },
        csslint: {
            options: { csslintrc: '<%= files.config.csslint %>' },
            src: ['<%= folders.app %>/style.css']
        },
        handlebars: {
            main: {
                options: {
                    amd: true,
                    //Use processName to name the template keys within the compiled templates.js file
                    //"assets/templates/example.hbs" --> "example"
                    processName: function (filePath) {
                        return filePath.replace(config.folders.assets, '').replace(/[\/]templates[\/]/, '').replace(/[.]hbs/, '');
                    }
                },
                files: { '<%= folders.app %>/templates.js': ['<%= folders.assets %>/<%= files.templates %>'] }
            }
        },
        htmlhintplus: {
            app: {
                src: [
                    '<%= folders.assets %>/<%= files.templates %>',
                    '<%= folders.app %>/<%= files.index %>'
                ]
            }
        },
        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            build: {
                files: [{
                        src: '<%= folders.app %>/<%= files.index %>',
                        dest: '<%= folders.dist %>/<%= folders.client %>/<%= files.index %>'
                    }]
            }
        },
        less: {
            main: {
                options: {
                    sourceMap: true,
                    sourceMapFileInline: true,
                    paths: ['<%= folders.assets %>/<%= files.styles %>']
                },
                files: { '<%= folders.app %>/style.css': '<%= folders.assets %>/less/style.less' }
            }
        },
        postcss: {
            options: {
                parser: require('postcss-safe-parser'),
                processors: [
                    require('autoprefixer')({ browsers: 'last 2 versions' }),
                    require('cssnano')()
                ]
            },
            dev: {
                options: {
                    map: {
                        inline: false,
                        annotation: '<%= folders.app %>'
                    }
                },
                src: [
                    '<%= folders.app %>/*.css',
                    '<%= folders.assets %>/css/style.css'
                ],
                dest: '<%= folders.app %>/style.css'
            },
            prod: {
                src: '<%= folders.app %>/*.css',
                dest: '<%= folders.dist %>/<%= folders.client %>/style.css'
            },
            styleguide: {
                options: {
                    processors: [require('mdcss')({
                            examples: {
                                css: [
                                    '.././app/style.css',
                                    '.././assets/css/style.css'
                                ]
                            }
                        })]
                },
                src: [
                    '<%= folders.app %>/*.css',
                    '<%= folders.assets %>/css/*.css'
                ]
            }
        }
    });
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
    grunt.loadTasks(config.folders.tasks);
    grunt.registerTask('default', ['serve']);
};