var formId;
var userId;

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
        .controller("FieldController", FieldController);
})();

function FieldController($scope, $routeParams, ngDialog, FieldService){

    $scope.model = {};
    $scope.model.fieldTypes = fieldTypes;
    $scope.removefield = RemoveField;

    formId= $routeParams.formId;
    userId= $routeParams.userId;

    if (formId == undefined || formId.length == 0) {
        alert("Please choose a form")
    }
    else {
        RanderField();
        $scope.removeField = RemoveField;
        $scope.addField = AddField;
        $scope.editField = EditField;
        $scope.copyField = CopyField;
    }

    function RanderField() {
        FieldService.getFieldsForForm(formId).then(function(fields){
            $scope.model.fields = fields;
        })
    }

    function RemoveField(field){
        FieldService.deleteFieldFromForm(formId, field.id).then(function(fields){
            $scope.model.fields = fields;
        })
    }

    function AddField(fieldType){
        console.log(fieldType);
        ngDialog.openConfirm({
            template: 'views/field/dialog/field.dialog.view.html',
            controller: 'FieldDialogController',
            className: 'ngdialog-theme-default ngdialog-theme-custom',
            scope : $scope,
            data: {
                userId: userId,
                formId: formId,
                fieldType: fieldType
            }
        }).then(null, function(fields){
            if(fields != undefined)
                $scope.model.fields = fields;
        })
    }

    function CopyField(field){
        var newField = JSON.parse(JSON.stringify(field));
        delete newField["id"];

        ngDialog.openConfirm({
            template: 'views/field/dialog/field.dialog.view.html',
            controller: 'FieldDialogController',
            className: 'ngdialog-theme-default ngdialog-theme-custom',
            scope : $scope,
            data: {
                userId: userId,
                formId: formId,
                field: newField
            }
        }).then(null, function(fields){
            if(fields != undefined)
                $scope.model.fields = fields;
        })
    }

    function EditField(field){
        ngDialog.openConfirm({
            template: 'views/field/dialog/field.dialog.view.html',
            controller: 'FieldDialogController',
            className: 'ngdialog-theme-default ngdialog-theme-custom',
            scope : $scope,
            data: {
                userId: userId,
                formId: formId,
                field: field
            }
        }).then(null, function(fields){
            if(fields != undefined)
                $scope.model.fields = fields;
        })
    }
}
