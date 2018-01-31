(function () {
	const init = function(){
		const app = new modules.App();
		const mainElement = document.getElementById(app.id);
		mainElement.appendChild(app.renderMain());
		app.renderChildren();
	}  
	window.onload = init

})()