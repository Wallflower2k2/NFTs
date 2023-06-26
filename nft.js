const NFTs=[]
function mintNFT(name,_eyeColor,_shirtType,_bling){
 const NFT ={
    "name" : name,
    "eyeColor": _eyeColor,
    "shirtType": _shirtType,
    "bling":_bling
 }
 NFTs.push(NFT);
 console.log("Minted: "+ name);
}


function listNFTs(){
    for(let i=0;i<NFTs.length;i++)
    console.log(NFTs[i]);
}

function getTotalSupply(){
    console.log(NFTs.length);
}

mintNFT("Gauri","Brown","Dress","Ring");
listNFTs();
getTotalSupply();
