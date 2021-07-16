window.onload = function() {
	/** 추가 버튼 클릭시 */
	const add = document.querySelector(".add");
	add.addEventListener("click", function(event) {
		const tr = document.createElement("tr");
		const td1 = document.createElement("td");
		const td2 = document.createElement("td");
		const td3 = document.createElement("td");
		const td4 = document.createElement("td");
		
		const input1 = document.createElement("input");
		const input2 = document.createElement("input");
		const input3 = document.createElement("input");
		
		input1.setAttribute("type", "text");
		input1.setAttribute("name", "goodsNm");
		
		input2.setAttribute("type", "text");
		input2.setAttribute("name", "price");
		
		input3.setAttribute("type", "text");
		input3.setAttribute("name", "stock");
		
		const span = document.createElement("span");
		
		
		td1.appendChild(input1);
		td2.appendChild(input2);
		td3.appendChild(input3);
		
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		
		const tbody = document.querySelector("tbody");
		tbody.appendChild(tr);
	});
	
	/** 삭제 버튼 클릭시 */
	const del = document.querySelector(".del");

};