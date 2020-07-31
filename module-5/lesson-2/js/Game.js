export class Game {
  constructor(player, npc) {
    this.player = player;
    this.npc = npc;
  }

  logFightFrame() {
    console.log('player: ',this.player.hitLevel, this.player.blockLevel);
    console.log('player health: ', this.player.health);
    console.log('npc: ', this.npc.hitLevel, this.npc.blockLevel);
    console.log('npc health: ', this.npc.health);
  }

  fight() {
    while(this.player.health > 0 && this.npc.health > 0) {
      const playerDamage = this.player.attack();    
      const npcDamage = this.npc.attack();
      const { hitLevel, blockLevel } = this.player.requestActions();
      const { npcHitLevel, npcBlockLevel } = this.npc.getActions();

      if(this.checkHitSuccess(hitLevel, npcBlockLevel)) {
        this.npc.takeDamage(playerDamage);
      }

      if(this.checkHitSuccess(npcHitLevel, blockLevel)) {
        this.player.takeDamage(npcDamage);
      }

      this.logFightFrame();
    }
  }

  checkHitSuccess(hitLevel, blockLevel) {
    return hitLevel !== blockLevel;
  }

  greet() {
    console.log('Yoohhohohoho');
    console.log(this.player);
    console.log(this.npc);
  }

  run() {
    this.fight();
    this.greet();
  }
}