const reactElement={
    type:'a',
    props:{
        herf:'https://google.com',
        target:'blank'
    },
    children:'click me to visit google'
}
function customRender(reactElement,container){
    // const domElement=document.createElement(reactElement.type)
    // domElement.innerHTML=reactElement.children
    // domElement.setAttribute('herf',reactElement.props.herf)
    // domElement.setAttribute('target',reactElement.props.target)
    // container.appendChild(domElement)


    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for (const prop in reactElement.props) {
       if(prop==='children') continue;
       domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}
const mainContainer=document.getElementById('root')


customRender(reactElement,mainContainer)