class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings
        this.aKey = null;
        this.dKey = null;


        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        

        this.leftLegX = this.bodyX - 75;
        this.leftLegY = this.bodyY + 100;

        this.rightLegX = this.bodyX + 75;
        this.rightLegY = this.bodyY + 100;

        this.leftArmX = this.bodyX - 90;
        this.leftArmY = this.bodyY + 40;

        this.rightArmX = this.bodyX + 90;
        this.rightArmY = this.bodyY + 40;

        this.eyeX = this.bodyX;
        this.eyeY = this.bodyY - 25;

        this.mouthHappyX = this.bodyX;
        this.mouthHappyY = this.bodyY + 25;

        this.mouthFangsX = this.bodyX;
        this.mouthFangsY = this.bodyY + 25;

        this.leftEarX = this.bodyX - 60;
        this.leftEarY = this.bodyY - 75;

        this.rightEarX = this.bodyX + 60;
        this.rightEarY = this.bodyY - 75;

    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);



        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png").setOrigin(0.5, 0.5);

        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_greenC.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_greenC.png");

        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_greenB.png");
        my.sprite.leftArm.flipX = true;
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_greenB.png");

        my.sprite.eye= this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_human_green.png");

        my.sprite.mouthHappy= this.add.sprite(this.mouthHappyX, this.mouthHappyY, "monsterParts", "mouth_closed_happy.png");

        my.sprite.mouthFangs= this.add.sprite(this.mouthFangsX, this.mouthFangsY, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.mouthFangs.visible = false;

        my.sprite.leftEar= this.add.sprite(this.leftEarX, this.leftEarY, "monsterParts", "detail_green_ear.png");
        my.sprite.leftEar.flipX = true;
        my.sprite.rightEar= this.add.sprite(this.rightEarX, this.rightEarY, "monsterParts", "detail_green_ear.png");
        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        this.input.keyboard.on("keydown", function (event) {
            console.log(event.code);
            if ( event.code == "KeyS" ) {
                my.sprite.mouthHappy.visible = true;
                my.sprite.mouthFangs.visible = false;
            }
            if ( event.code == "KeyF" ) {
                my.sprite.mouthFangs.visible = true;
                my.sprite.mouthHappy.visible = false;
            }
        });

        if (this.aKey.isDown) {
            this.my.sprite.body.x -= 2;
            this.my.sprite.leftLeg.x -= 2;
            this.my.sprite.rightLeg.x -= 2;
            this.my.sprite.leftArm.x -= 2;
            this.my.sprite.rightArm.x -= 2;
            this.my.sprite.eye.x -= 2;
            this.my.sprite.mouthHappy.x -= 2;
            this.my.sprite.mouthFangs.x -= 2;
            this.my.sprite.leftEar.x -= 2;
            this.my.sprite.rightEar.x -= 2;
        }

        if (this.dKey.isDown) {
            this.my.sprite.body.x += 2;
            this.my.sprite.leftLeg.x += 2;
            this.my.sprite.rightLeg.x += 2;
            this.my.sprite.leftArm.x += 2;
            this.my.sprite.rightArm.x += 2;
            this.my.sprite.eye.x += 2;
            this.my.sprite.mouthHappy.x += 2;
            this.my.sprite.mouthFangs.x += 2;
            this.my.sprite.leftEar.x += 2;
            this.my.sprite.rightEar.x += 2;
        }
    }
}