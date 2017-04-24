module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
        public: {
            files: [
                {src: 'node_modules/bootstrap/dist/css/bootstrap.min.css', dest: 'app/assets/css/bootstrap.min.css'},
                {src: 'node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.eot', dest: 'app/assets/fonts/glyphicons-halflings-regular.eot'},
                {src: 'node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.svg', dest: 'app/assets/fonts/glyphicons-halflings-regular.svg'},
                {src: 'node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf', dest: 'app/assets/fonts/glyphicons-halflings-regular.ttf'},
                {src: 'node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', dest: 'app/assets/fonts/glyphicons-halflings-regular.woff'},
                {src: 'node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2', dest: 'app/assets/fonts/glyphicons-halflings-regular.woff2'},
                {src: 'node_modules/angular-route/angular-route.min.js', dest: 'app/assets/js/angular-route.min.js'},
                {src: 'node_modules/bootstrap/dist/js/bootstrap.min.js', dest: 'app/assets/js/bootstrap.min.js'},
                {src: 'node_modules/jquery/dist/jquery.min.js', dest: 'app/assets/js/jquery.min.js'},
                {src: 'node_modules/angular/angular.min.js', dest: 'app/assets/js/angular.min.js'}
            ],
        }
    },
    sass : {
        dist : {
            files : {
                'dev/css/style.css' : 'dev/sass/main.scss'
            }
        }
    },
    cssmin : {
        target: {
            files: [{
                expand: true,
                cwd: 'dev/css',
                src: ['*.css', '!*.min.css'],
                dest: 'app/assets/css',
                ext: '.min.css'
            }]
        }
    },
    uglify : {
        my_target : {
            files : {
                'app/assets/js/animate-cursor.min.js' : ['dev/js/animate-cursor.js']                
            }
        }
    }
  }); 

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default',['sass','cssmin','copy','uglify']);

};