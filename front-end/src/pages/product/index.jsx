import React from 'react';
import './index.css';
import '../../css/common.css';
import { Title, LinkNm } from '../../component/Utils/utils';

const product=[
    {
        name:"ZJUBCA区块链钱包",
        link:"https://github.com/Blockchain-zju/zjubca.wallet/tree/master",

    },
    {
        name:"区块链管理器EOSToolkit",
        link:"https://toolkit.zjubca.org/"
    },
    {
        name:"基于scatter的区块链SDK",
        link:"https://github.com/Blockchain-zju/zjubca-scatter-js"
    }
]
const product2Div=product=>(
    <div className="zjubca-product-item scFlexRow">
        <div className="ccFlexColumn" style={{width:80,height:80,backgroundColor:"#1b1f25"}}>
            <div className="ccFlexColumn centerBG" style={{height:"100%",width:"100%",backgroundImage:"url(http://img.fishstar.xyz/zjubca/icon.png)"}}/>
        </div>
        <div className="zjubca-product-intro scFlexRow">
            <LinkNm fs={20} contentAfter={product.name} href={product.link}/>
        </div>
    </div>
)
export const Product = () => (
<div className="zjubca-product scFlexColumn">
    <Title fs={32} fw={"bold"} content={"协会相关产品"}/>
    {product.map(product2Div)}
</div>
)