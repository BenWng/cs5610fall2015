var userId;
var formId;
var field;

var fieldTypes = [
    {label:"Single Line Text", value:"TEXT"},
    {label:"Date", value:"DATE"},
    {label:"Dropdown", value:"OPTIONS"},
    {label:"Checkboxes", value:"CHECKBOXES"},
    {label:"Paragraph Text Field", value:"TEXTAREA"},
    {label:"Radio buttons", value:"RADIOS"}
];

(function(){
    angular
        .module("FormBuilderApp")
        .controller("FieldDialogController", FieldDialogController);
})();

function FieldDialogController($scope, ngDialog, FieldService) {
    $scope.dialog = {};
    $scope.dialog.fieldTypes = fieldTypes;
    $scope.dialog.fieldType = $scope.ngDialogData.fieldType;
    userId = $scope.ngDialogData.userId;
    formId = $scope.ngDialogData.formId;
    field = $scope.ngDialogData.field;

    if(field != undefined)
        SetField();

    $scope.add = Add;
    $scope.hasItems = HasItems;
    $scope.hasPlaceHolder = HasPlaceHolder;

    function SetField(){
        $scope.dialog.label = field.label;
        $scope.dialog.fieldType = field.type;
        $scope.dialog.placeholder = field.placeholder;
        $scope.dialog.tooltip = field.tooltip;

        if(field.options != undefined) {
            $scope.dialog.items = field.options
                .map(function (x) {
                    return x.label;
                })
                .join("\n");
        }
    }

    function HasItems(type) {
        return type == "RADIOS" || type == "CHECKBOXES" || type == "OPTIONS";
    }

    function HasPlaceHolder(type) {
        return type == "TEXT" || type == "TEXTAREA" || type == "DATE";
    }

    function Add(dialog) {
        if (dialog.label == undefined || dialog.label.length == 0)
            alert("Please enter the label");
        else if (HasItems(dialog.fieldType) && (dialog.items == undefined || dialog.items.length == 0))
            alert("Please enter the items for this");
        else {
            var newField = {
                label: dialog.label,
                type: dialog.fieldType
            };

            if (dialog.tooltip != undefined && dialog.tooltip.length > 0)
                newField.tooltip = dialog.tooltip;

            if (HasPlaceHolder(dialog.fieldType) && dialog.placeholder != undefined)
                newField.placeholder = dialog.placeholder;
            if (HasItems(dialog.fieldType)) {
                var options = makeOptions(dialog.items)
                newField.options = options;
            }

            if(field != undefined && field.id != undefined){
                newField.id = field.id;
                FieldService.updateField(formId, newField.id, newField).then(function (fields) {
                    $scope.closeThisDialog(fields);
                })
            }
            else {
                FieldService.createFieldForForm(formId, newField).then(function (fields) {
                    $scope.closeThisDialog(fields);
                })
            }
        }
    }

    function makeOptions(items) {
        var options = items.split("\n")
            .filter(function (val) {
                return val.length > 0
            })
            .map(function (val) {
                var option = {label: val, value: val};
                return option;
            });
        return options;
    }
}