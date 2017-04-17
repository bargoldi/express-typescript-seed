import { Gulpclass, Task } from 'gulpclass/Decorators';

let gulp = require('gulp');
let ts = require('gulp-typescript');

@Gulpclass()
export class Gulpfile {
	@Task()
	buildModule(cb: Function) {
		return gulp.src(['*.ts', '!*.d.ts', './**/*.ts', '!./**/*.d.ts', '!node_modules/'])
			.pipe(ts({
				declaration: true,
				module: 'umd',
				target: 'es5',
				sourceMap: true
			}))
			.pipe(gulp.dest((file)=> {
				return file.base;
			}));
	}

	@Task('default', ['buildModule'])
	default() {
	}
}