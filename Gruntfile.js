module.exports = function(grunt) {
  grunt.initConfig({
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

  grunt.registerTask('default',['sass','cssmin']);

};