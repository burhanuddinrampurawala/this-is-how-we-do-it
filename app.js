(function () {
	const storage = new modules.Storage();
	const elements = new modules.Elements();
	const div = new elements.Div();
	const button = new elements.Button();
	const paragraph = new elements.Paragraph();
	modules.App = function() {
		let input = new elements.Input().create();
		const module = {
			'id': 'app'
		};
		module.onClick = () =>{
			let id = modules.generateUUID();
			const name = input.value
			input.value = ''
			new newChild(id,0,name).render();
			storage.save(id,0,name);
		}
		module.renderMain =  () => {
			const addButton = button.create('+Add',module.onClick);
			addButton.setAttribute('id','add');
			const elemntsDiv = div.create('id','addNewElements')
			let el = document.createElement('div')
			el.appendChild(input);
			el.appendChild(addButton);
			el.appendChild(elemntsDiv);
			return el
		}
		module.renderChildren = () =>{
			for(let i = 1 ; i<storage.getKeys().length; i++){
				try{
					const [id,name,count] = storage.getData(i);
					new newChild(id,count,name).render();
				}
				catch(e){
					console.log(e);
				}
				finally{
					continue;
				}
			}
		}
		return module;
	}
	function newChild(id,c,name){
		const  upperElement = div.create('style','margin-top:20px');
		const p = paragraph.create(c)
		const module = {}
		module.increment = () => {
			let count = storage.getCount(id);
			p.innerHTML = ++count;
			storage.resetData(id,count,storage.getName(id));
		}
		module.removeChild = () => {
			upperElement.parentNode.removeChild(upperElement);
			storage.removeData(id);
		}
		module.render = () =>{
			const data = paragraph.create(name)
			const addButton = button.create('+',module.increment);
			const removeButton = button.create('X',module.removeChild);
			upperElement.appendChild(data)
			upperElement.appendChild(p)
			upperElement.appendChild(addButton)
			upperElement.appendChild(removeButton)
			const element = document.getElementById("addNewElements");
			element.appendChild(upperElement);
			return element
		}

		return module;
	}

})()