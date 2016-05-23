var bcounter = 0;
var pageCounter = 0;
function addQuestion (){
	
	var questionId = ++bcounter;
	var questionTable = document.getElementById("questionTable");
	
	//TABLE ROW
	var qTableRow = document.createElement("tr");
	qTableRow.setAttribute("class", "qTd");
	qTableRow.setAttribute("id", questionId);
	questionTable.appendChild(qTableRow)
	
	//CHECKBOX
	var qCheckBox = document.createElement("input")
	qCheckBox.setAttribute("class", "qCheckBox");
	qCheckBox.setAttribute("type", "checkbox");
	qCheckBox.setAttribute("name", "qCheckbox");
	qCheckBox.setAttribute("value", questionId);
	
	//QUESTION NAME
	var qName = document.createElement("td");
	qName.setAttribute("class", "qName")
	var qNameText = document.createTextNode("Question" + questionId);
	qName.appendChild(qNameText);

	//QUESTION TYPE
	var qType = document.createElement("td");
	qType.setAttribute("class", "qType");
	var qTypeText = document.createTextNode("Question Type");
	qType.appendChild(qTypeText);
	
	//ADD TO TABLE ROW
	qTableRow.appendChild(qCheckBox);
	qTableRow.appendChild(qName);
	qTableRow.appendChild(qType);
	
}

function addPage () {
	
	
	var questionPages = document.getElementById("questionPages");
	
	
	var qPage = document.createElement("li");
	qPage.setAttribute("class", "qPage");
	
	var qPageNumber = document.createTextNode(++pageCounter);
	
	qPage.appendChild(qPageNumber);
	questionPages.appendChild(qPage);
};
for (var i = 0; i < 10; i++)
addQuestion ();
for (var i = 0; i < 10; i++)
addPage();