"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var SimpleAnimation = (function () {
    function SimpleAnimation(animation) {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(100, 1, 1, 10000);
        camera.position.z = 800;
        var geometry = new THREE.SphereGeometry(200);
        var geometry2 = new THREE.SphereGeometry(20);
        var material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
        var mesh = new THREE.Mesh(geometry, material);
        var mesh2 = new THREE.Mesh(geometry2, material);
        mesh2.position.set(200, 0, 0);
        scene.add(mesh);
        scene.add(mesh2);
        var renderer = new THREE.WebGLRenderer();
        //renderer.setSize(container.innerWidth(), container.innerWidth())
        animation.nativeElement.append(renderer.domElement);
        var x = function (radius, angle) {
            radius * Math.cos(angle) * Math.sin(angle);
        };
        var y = function (radius, angle) {
            radius * Math.sin(angle) * Math.sin(angle);
        };
        var z = function (radius, angle) {
            radius * Math.cos(angle);
        };
        var angle = 0;
        var animate = function () {
            // note: three.js includes requestAnimationFrame shim
            requestAnimationFrame(animate);
            mesh.rotation.x += 0.01;
            mesh.rotation.y += 0.01;
            angle += 0.03;
            mesh2.position.set(x(200, angle), y(200, angle), z(200, angle));
            renderer.render(scene, camera);
        };
        animate();
    }
    return SimpleAnimation;
}());
SimpleAnimation = __decorate([
    core_1.Component({
        selector: 'simple-animation',
        template: ''
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], SimpleAnimation);
exports.SimpleAnimation = SimpleAnimation;
//# sourceMappingURL=simple-animation.component.js.map