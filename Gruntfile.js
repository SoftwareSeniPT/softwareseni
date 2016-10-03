module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        codekit: {
          dist: {
            src: ['**/*.kit', '!kit/__partial__/*.kit', '!kit/__config__/*.kit'],
            dest: ''
          }
        },
        sass: {
          options: {
            sourceMap: true
          },
          dist: {
            files: {
              'css/style.css': 'sass/style.scss',
              'css/mobile.css': 'sass/mobile.scss'
            }
          }
        },
        connect: {
          server: {
            options: {
              port: 9001,
              base: ''
            }
          }
        },
        watch: {
            codekit: {
                files: ['**/*.kit', '!node_modules/**'],
                tasks: ['codekit']
            },
            sass: {
                files: ['**/*.scss', '!node_modules/**'],
                tasks: ['sass']
            },
            options: {
                spawn: false
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['connect', 'watch']);
};
