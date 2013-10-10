---
layout: post
title: "Creating an Isometric Camera in Unity"
description: "It's easier than you'd think..."
category: articles
tags: [blog, unity, camera, c#, isometric, tutorial, orthographic]
image:
  feature: newyork_isometric.jpg
comments: true
---

In addition to rendering a typical three-dimensional perspective, Unity also allows Cameras to use Orthographic projection instead, making it a fairly simple process to create your own isometric camera.

### Game Isometric vs True Isometric

True isometric rendering requires a camera rotation of **(54.736, 0, 45)**. You can see that that 54.735 isn't really a clean number, and actually creates a lot of hassle when rendering things on the grid of pixels that is your monitor screen.

Thankfully, smart 2D graphics programmers identified this pretty quickly, and found that a similar perspective can be created by using a camera rotation of **(60, 0, 45)** - much nicer to work with. It may not be true isometric, but it's the camera angle you're most likely used to when playing games, and maintains a 2:1 ratio of pixels. If you use grid paper to design your levels first, you'll be able to replicate the on screen visuals by drawing two squares along for every one square up.

### Down To Business

Math lesson out the way, create a new scene (or open one you'd prefer to work with).

In the default blank scene you get with Unity all you'll have is the basic MainCamera, which we'll modify in just a sec. In my scene I added a Quad Primitive (available from Unity 4.2 onward) and rotated it so that it was lying on the XZ axis (like the ground, basically) and scaled it up a bit.

![A Simple Quad Scene ]({{ site.url }}/images/isometric_step1.jpg)

The next step is to modify the MainCamera that we want to use modifying it's properties in the inspector panel like so...

![MainCamera Settings]({{ site.url }}/images/camera_settings.jpg)

The key changes worth paying attention to are the position, rotation and the projection variables of our camera. I also modified the size variable and the Near Clipping Pane to avoid cutting off our view if we stray too far.

![A common rendering error when the clipping pane is too small]({{ site.url }}/images/clipping_error.jpg "A common rendering error when the clipping pane is too small")

*If you find yourself seeing things like the screenshot below, adjust your clipping panes.*

### Adding Keyboard Controls

To add a bit of interactivity we're going to need to write a `CameraController` script that will update the position of the camera in response to user input.

Highlight your Assets folder in the Project pane like so. Click the **Create** dropdown and create a new C# script. This will create a barebones `MonoBehaviour` for you.

![]({{ site.url }}/images/project_tab.jpg)

Rename the script to call it **CameraController.cs** and open it up in your favourite text editor.

All of the default code can stay. We use the `Start()` function to setup our initial variables, getting the initial position of the camera that we set in the Inspector. `Update()` handles key input, and moves the camera.


{% gist 6919914 %}

### Fin

![Our quad scene with a working isometric view]({{ site.url}}/images/final_capture.jpg)

That wasn't too bad. There's still more to do if we want to really polish our camera.

In the next post we'll look at how to rotate the camera around the the center point of the viewport and how to zoom in and out.