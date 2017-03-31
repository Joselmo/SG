/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tutorial_1;

import com.sun.j3d.utils.applet.MainFrame;
import com.sun.j3d.utils.geometry.ColorCube;
import com.sun.j3d.utils.universe.SimpleUniverse;
import java.applet.Applet;
import java.awt.BorderLayout;
import java.awt.Frame;
import java.awt.GraphicsConfiguration;
import java.awt.Label;
import javax.media.j3d.Alpha;
import javax.media.j3d.BoundingSphere;
import javax.media.j3d.BranchGroup;
import javax.media.j3d.Canvas3D;
import javax.media.j3d.RotationInterpolator;
import javax.media.j3d.TransformGroup;

/**
 *
 * @author Jose-laptop
 */
public class HelloJava3Da extends Applet {

    public HelloJava3Da() {
        setLayout(new BorderLayout());
        GraphicsConfiguration config = SimpleUniverse.getPreferredConfiguration();
        Canvas3D canvas3D = new Canvas3D(config);
        add("Center", canvas3D);
        add("North",new Label("Esto es el top"));

        BranchGroup scene = createSceneGraph();
        scene.compile();

        // SimpleUniverse is a Convenience Utility class
        SimpleUniverse simpleU = new SimpleUniverse(canvas3D);

        // This moves the ViewPlatform back a bit so the
        // objects in the scene can be viewed.
        simpleU.getViewingPlatform().setNominalViewingTransform();

        simpleU.addBranchGraph(scene);
        // end of HelloJava3Da (constructor)

    }
    
    public BranchGroup createSceneGraph(){
        // Create the root of the branch graph
        BranchGroup objRoot = new BranchGroup();
        
        TransformGroup objSpin = new TransformGroup();
        
        objSpin.setCapability(TransformGroup.ALLOW_TRANSFORM_WRITE);
        objRoot.addChild(objSpin);
        
       objSpin.addChild(new ColorCube(0.4));
       
      Alpha rotationAlpha = new Alpha (-1,4000);
       
       RotationInterpolator rotator = new RotationInterpolator(rotationAlpha, objSpin);
       BoundingSphere bounds = new BoundingSphere();
       rotator.setSchedulingBounds(bounds);
       
       objSpin.addChild(rotator);
       
        return objRoot;
    }
    
    
    public static void main(String[] args){
        Frame frame = new MainFrame(new HelloJava3Da(), 256,256);
    }
}
