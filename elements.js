(function(){
	modules.Elements = function(){
		const elements = {};
		elements.Button = function (){
			const module = {}
			module.create = (label,click) => {
				const button = document.createElement('button');
				button.appendChild(document.createTextNode(label));
				button.onclick = click;
				return button;
			}
			return module;
		}
		elements.Input = function (){
			const module = {}
			module.create = () => {
				const input = document.createElement('input');
				input.setAttribute('type','text');
				input.setAttribute('name','name');
				input.setAttribute('id','data');
				return input;
			}
			return module
		}
		elements.Div = function (){
			const module = {}
			module.create = (attr,data)=>{
				const div =  document.createElement('div');
				div.setAttribute(attr,data)
				return div;
			}
			return module;
		}
		elements.Paragraph=function(){
			const module = {}
			module.create = (data)=>{
				const p= document.createElement('p');
				p.appendChild(document.createTextNode(data))
				return p;
			}
			return module; 
		}
		return elements;
	}
})()