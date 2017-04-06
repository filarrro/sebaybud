angular.module('app')
    .directive("imageCropper", ["$timeout", function($timeout) {
        return {
            restrict: 'E',
            templateUrl: 'modules/cropper/cropper.html',
            link: function($scope) {
                $timeout(function() {
                    var Cropper = window.Cropper;
                    var console = window.console || {
                        log: function() {}
                    };
                    var container = document.querySelector('.img-container');
                    var image = container.getElementsByTagName('img').item(0);
                    var actions = document.getElementById('actions');
                    var inputImage = document.getElementById('inputImage');

                    function set(width, height) {
                        $scope.$apply(function() {
                            $scope.croppWidth = Math.round(width);
                            $scope.croppHeight = Math.round(height);
                        });
                    }

                    var options = {
                        aspectRatio: $scope.cropperOptions.aspectRatio,
                        autoCropArea: 1,
                        zoomOnWheel: false,
                        preview: '.img-preview',
                        crop: function(e) {
                            set(e.width, e.height);
                        }
                    };
                    var cropper = new Cropper(image, options);

                    $scope.imgbase = {};
                    $scope.sendToServer = function() {
                        var dimensions = {};
                        if ($scope.cropperOptions.width)
                            dimensions.width = $scope.cropperOptions.width;
                        if ($scope.cropperOptions.height)
                            dimensions.height = $scope.cropperOptions.height;
                        if ($scope.cropperOptions.fillColor)
                            dimensions.fillColor = $scope.cropperOptions.fillColor;

                        $scope.imgbase.image = cropper.getCroppedCanvas(dimensions).toDataURL($scope.cropperOptions.imgType);
                        $scope.imgbase.thumb = cropper.getCroppedCanvas({ width: 250, fillColor: '#FFF' }).toDataURL($scope.cropperOptions.imgType);

                        cropper = null;
                        return $scope.imgbase;
                    };

                    $scope.destroyInstance = function() {
                        cropper = null;
                    };

                    $scope.scaleToFit = function() {
                        cropper('setCanvasData', cropper('getCropBoxData'));
                    };

                    // Methods
                    actions.querySelector('.docs-buttons').onclick = function(event) {
                        var e = event || window.event;
                        var target = e.target || e.srcElement;
                        var result;
                        var input;
                        var data;

                        if (!cropper) {
                            return;
                        }

                        while (target !== this) {
                            if (target.getAttribute('data-method')) {
                                break;
                            }
                            target = target.parentNode;
                        }

                        if (target === this || target.disabled || target.className.indexOf('disabled') > -1) {
                            return;
                        }

                        data = {
                            method: target.getAttribute('data-method'),
                            target: target.getAttribute('data-target'),
                            option: target.getAttribute('data-option'),
                            secondOption: target.getAttribute('data-second-option')
                        };

                        if (data.method) {
                            if (typeof data.target !== 'undefined') {
                                input = document.querySelector(data.target);

                                if (!target.hasAttribute('data-option') && data.target && input) {
                                    try {
                                        data.option = JSON.parse(input.value);
                                    } catch (e) {
                                        console.log(e.message);
                                    }
                                }
                            }

                            if (data.method === 'getCroppedCanvas') {
                                data.option = JSON.parse(data.option);
                            }

                            result = cropper[data.method](data.option, data.secondOption);

                            switch (data.method) {
                                case 'scaleX':
                                case 'scaleY':
                                    target.setAttribute('data-option', -data.option);
                                    break;

                                case 'getCroppedCanvas':
                                    if (result) {
                                        $scope.sendToServer();
                                    }
                                    break;

                                case 'destroy':
                                    cropper = null;
                                    break;
                            }

                            if (typeof result === 'object' && result !== cropper && input) {
                                try {
                                    input.value = JSON.stringify(result);
                                } catch (e) {
                                    console.log(e.message);
                                }
                            }
                        }
                    };

                    // Import image
                    var inputImage = document.getElementById('inputImage');
                    var URL = window.URL || window.webkitURL;
                    var blobURL;

                    if (URL) {
                        inputImage.onchange = function() {
                            var files = this.files;
                            var file;

                            if (cropper && files && files.length) {
                                file = files[0];

                                if (/^image\/\w+/.test(file.type)) {
                                    blobURL = URL.createObjectURL(file);
                                    cropper.reset().replace(blobURL);
                                    inputImage.value = null;
                                } else {
                                    window.alert('Please choose an image file.');
                                }
                            }
                        };
                    } else {
                        inputImage.disabled = true;
                        inputImage.parentNode.className += ' disabled';
                    }

                    $scope.uploadFile = function() {
                        inputImage.click();
                    };
                });
            }
        };
    }]);