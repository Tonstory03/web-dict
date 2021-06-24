const path = require('path');
const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const dirHusky = path.join(__dirname, '../../.husky');

async function main() {
  if(!fs.existsSync(dirHusky)){
    try{
      const { stdout, stderr } = await exec('npx husky install');
      
      if(/husky - Git hooks installed/gi.test(stdout)){
        const pathSrc = path.join(__dirname, 'cmd');
        const fileNames = fs.readdirSync(pathSrc);
        for(const fileName of fileNames){ 
          fs.copyFileSync(path.join(pathSrc, fileName), path.join(dirHusky, fileName))
        } 
      }
    }catch(err){
      console.error(err.message)
    }
  }
}
 
main()