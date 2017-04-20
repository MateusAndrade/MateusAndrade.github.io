module.exports = function(grunt) {
  grunt.initConfig({
    sass : {
        dist : {
            files : {
                'assets/css/style.css' : 'assets/sass/style.scss'
            }
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default',['sass']);

};