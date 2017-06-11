import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'simple-animation',
	template: ''
})
export class SimpleAnimation {
	constructor(animation: ElementRef) {
		var scene = new THREE.Scene();

		var camera = new THREE.PerspectiveCamera(100, 1, 1, 10000)
		camera.position.z = 800

		var geometry = new THREE.SphereGeometry(200)
		var geometry2 = new THREE.SphereGeometry(20)
		var material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true})

		var mesh = new THREE.Mesh(geometry, material)
		var mesh2 = new THREE.Mesh(geometry2, material)
		mesh2.position.set(200, 0, 0)

		scene.add(mesh)
		scene.add(mesh2)

		var renderer = new THREE.WebGLRenderer()
		//renderer.setSize(container.innerWidth(), container.innerWidth())
		animation.nativeElement.append(renderer.domElement)

		let x = function(radius, angle) {
			radius*Math.cos(angle)*Math.sin(angle)
		}

		let y = function(radius, angle) {
			radius*Math.sin(angle)*Math.sin(angle)
		}

		let z = function(radius, angle) {
			radius*Math.cos(angle)
		}

		var angle = 0
		let animate = function() {
			// note: three.js includes requestAnimationFrame shim
			requestAnimationFrame(animate)
			mesh.rotation.x += 0.01
			mesh.rotation.y += 0.01
			angle += 0.03
			mesh2.position.set(x(200, angle), y(200, angle), z(200, angle))
			renderer.render(scene, camera)
		}
		animate()
	}
}
