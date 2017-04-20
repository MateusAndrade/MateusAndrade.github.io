module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
        public: {
            files: [
                {src: 'node_modules/angular/angular.min.js', dest: 'assets/js/angular.min.js'}
            ],
        }
    },
    sass : {
        dist : {
            files : {
                'assets/css/style.css' : 'assets/sass/main.scss'
            }
        }
    },
    cssmin: {
        target: {
            files: [{
                expand: true,
                cwd: 'assets/css',
                src: ['*.css', '!*.min.css'],
                dest: 'assets/css',
                ext: '.min.css'
            }]
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default',['sass','cssmin','copy']);

};