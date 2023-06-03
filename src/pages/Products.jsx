import React from "react"
import Card from "../components/Card"

function Products() {
  return (
    <div>
      <h2>Productos</h2>
      <div className="card-container">
        <Card
          imageSrc="https://i.pinimg.com/750x/ee/b0/af/eeb0af5b9437fa87c87ba5a93ba5430d.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          whatsappLink="https://wa.me/1234567890"
        />
        <Card
          imageSrc="https://i.pinimg.com/750x/9f/03/6c/9f036c7299212a74d0c47b665f46dcef.jpg"
          description="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
          whatsappLink="https://wa.me/0987654321"
        />
      </div>
    </div>
  )
}

export default Products