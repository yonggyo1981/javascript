window.onload = function() {
	/** 항목 추가 */
	const add = document.getElementsByClassName("add");

	add[0].addEventListener("click", function() {
		const tr = document.createElement("tr");
		const tds = [], inputs = [];
		const names = ["name", "gender", "age", "job"];
		
		for(let i = 0; i < 5; i++) {
			tds[i] = document.createElement("td");
			if (i == 4) { // 삭제 버튼 추가 
				const span = document.createElement("span");
				const text = document.createTextNode("삭제");
				span.appendChild(text);
				span.className = "delete btn";
				tds[i].appendChild(span);
				
			} else { // 입력 항목 추가 
				inputs[i] = document.createElement("input");
				inputs[i].setAttribute("type", "text");
				inputs[i].setAttribute("name", names[i]);
				
				tds[i].appendChild(inputs[i]);
			}
		}
		
		tds.forEach(function(td) {
			console.log(td);
		});
	});
};