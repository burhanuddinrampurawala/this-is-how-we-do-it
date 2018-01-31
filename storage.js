(function(){
	modules.Storage = function(){
		if(localStorage.getItem('key') == null)
			localStorage.setItem('key',[])
		let keys = localStorage.getItem('key').split(',');
		const module = {};
		module.save = (id,count,name)=> {
			keys.push(id)
			localStorage.setItem('key',keys)
			let save = [name,count]
			localStorage.setItem(id,save)
		}
		module.getCount = (id)=>{
			let [name,count] = localStorage.getItem(id).split(',');
			return count;
		}
		module.getName = (id) => {
			let [name,count] = localStorage.getItem(id).split(',');
			return name;
		}
		module.removeData = (id) => {
			localStorage.removeItem(id);
			keys.splice(keys.indexOf(id),1);
			localStorage.setItem('key',keys);
		}
		module.resetData = (id,count,name)=>{
			localStorage.setItem(id,[name,count]);
		}
		module.getData = (index) =>{
			const id = keys[index];
			const [name,count] = localStorage.getItem(id).split(',');
			const data = [id,name,count];
			return data;
		}
		module.getKeys = () =>{
			return keys;
		}
		return module;
	}
})()