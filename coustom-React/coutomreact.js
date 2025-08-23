function customrender(Reactelement,container){
  // const domElement=document.createElement(Reactelement.type)
  // domElement.innerHTML=Reactelement.Children
  // domElement.setAttribute('href',Reactelement.props.href)
  // domElement.setAttribute('target',Reactelement.props.target)
  // container.appendChild(domElement)

  const domElement=document.createElement(Reactelement.type)
  domElement.innerHTML=Reactelement.Children
  for (const prop in Reactelement.props) {
    if(prop === 'children')continue
    // not return bcz it will close entire thing
    domElement.setAttribute(prop,Reactelement.props[prop])

    }
  }
  

const Reactelement={
type:'a',
  props:{
    href:"https://goggle.com",
    target:'_blank'
  },
  Children:"CLick me to visit Google :)"

}
const mainContainer=document.querySelector("#root")
customrender(Reactelement,mainContainer)