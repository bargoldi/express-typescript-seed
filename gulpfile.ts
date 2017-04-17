import { Gulpclass, Task } from 'gulpclass/Decorators';

let gulp = require('gulp');
let ts = require('gulp-typescript');
let exec = require('child_process').exec;

@Gulpclass()
export class Gulpfile {
	private _modulesPath = ['dal', 'models'];

	@Task()
	buildIndex() {
		return gulp.src(['./index.ts'])
			.pipe(ts())
			.pipe(gulp.dest('./dist'));
	}

	@Task('buildApp', ['buildIndex'])
	buildApp() {
		return gulp.src(['./app/**/*.ts'])
			.pipe(ts())
			.pipe(gulp.dest('./dist/app'));
	}

	@Task()
	buildGulpFiles() {
		return gulp.src(this._modulesPath.map(modulePath => `./${modulePath}/gulpfile.ts`))
			.pipe(ts({
				module: 'none',
				target: 'es5',
				experimentalDecorators: true
			}))
			.pipe(gulp.dest((file)=> {
				return file.base;
			}));
	}

	@Task('buildModules', ['buildGulpFiles'])
	buildModules() {
		return this._modulesPath.forEach((modulePath)=> {
			this.dynamicModuleBuild(modulePath);
		});
	}

	@Task()
	dynamicModuleBuild(modulePath: string) {
		return exec(`gulp --gulpfile ./${modulePath}/gulpfile.js`, (error, stdout, stderr)=> {
			console.log(stdout);
			if (error) {
				console.log(error, stderr);
			}
		});
	}

	@Task('project', ['buildApp', 'buildModules'])
	project() {
		return;
	}

	@Task('default', ['project'])
	default() {
	}
}