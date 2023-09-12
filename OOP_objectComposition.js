// superClass
class Developer {
	constructor(name) {
		this.name = name;
	}

	commitChanges() {
		console.log(`${this.name} is committing changes...`);
	}
}

// create fungsi sesuai kemampuan yang dapat dilakukan
function canBuildUI(developer) {
	return {
		buildUI: () => {
			console.log(`${developer.name} is building UI...`);
		}
	}
}

function canBuildAPI(developer) {
	return {
		buildAPI: () => {
			console.log(`${developer.name} is building API...`);
		}
	}
}

function canDeployApp(developer) {
	return {
		deployApp: () => {
			console.log(`${developer.name} is deploying app...`);
		}
	}
}

// fungsi sebagai object creator
function createFrontEndDeveloper(name) {
	const developer = new Developer(name);
	return Object.assign(developer, canBuildUI(developer)); // mengomposisikan objek dengan method Object.assign()
}

function createBackEndDeveloper(name) {
	const developer = new Developer(name);
	return Object.assign(developer, canBuildAPI(developer));
}

function createDevOps(name) {
	const developer = new Developer(name);
	return Object.assign(developer, canDeployApp(developer));
}

function createFullStackDeveloper(name) {
	const developer = new Developer(name);
	return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeployApp(developer));
}

// instance object
const fullStackDeveloper = createFullStackDeveloper('kise');
fullStackDeveloper.buildUI();
fullStackDeveloper.buildAPI();
fullStackDeveloper.deployApp();
console.log(`is ${fullStackDeveloper.name} developer? `, fullStackDeveloper instanceof Developer);