import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import git from '../assets/github.png'
import node from '../assets/node.png'
import express from '../assets/download.png'
import mongo from '../assets/mongodb.png'
const Skill = () => {
    const list = [
        {
            name: "HTML",
            imglink: html
        },
        {
            name: "CSS",
            imglink: css
        },
        {
            name: "Javascript",
            imglink: javascript
        },
        {
            name: "React",
            imglink: react
        },
        {
            name: "tailwind",
            imglink: tailwind
        },
        {
            name: "TypeScript",
            imglink: "data:image/png;base64,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"
        },
        {
            name: "Git",
            imglink: git
        },
        {
            name: "Node.js",
            imglink: node
        },
        {
            name: "Express.js",
            imglink: express
        },
        {
            name: "Python",
            imglink: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw4TDg4ODhERDhARERERDg4QERERDw4OGBIXFxcUFhQZHiohGhsmHhYWIj8kJistMTEwGCA1OjUvOiovMC0BCgoKDw4PHBERHDIjHiMtLy8vLy8vLS0vLTItLy8vMi0tLS8xLy0vLy8vLy8tLTIvLy0tLS8vMS8vLS8tLy0vLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQYEBQcCAwj/xABHEAACAQEDBAsMCAYDAQAAAAAAAQIDBAUREiExUQYHIkFSYXGRk6HRExQVFzIzU3JzgZKxFjSisrPB0+EjNUKC0vAkYnTC/8QAGwEAAgMBAQEAAAAAAAAAAAAAAAEDBAUCBgf/xAA5EQACAQEDCQUGBQUBAAAAAAAAAQIDBBExBRITIVFSgZGhMkFhcdEUFSKxwfAjM2Ki4UJTcoLxNP/aAAwDAQACEQMRAD8A7iAAAAAAAAAAAa++LzpWahOvVe5jmUV5U5vRGK1v9xpNu5CbSV7MutVjCLnOUYRisZSk1GMVrbegql67P7JTbjRUrTJb8dxSx9d537k0UK/9kFotU8qrLJpp406MW+5w1etLjfVoNUaFOxLGfIz6lsd90C2W3Z/bp4qn3Ogt7JjlzXvlinzGnr7JLwn5Vprf2TdNc0MDVEFqNKEcEuRWdWbxb5mTUt1eXlVqkvWnN/NnwlJvS2+V4kEHaVxzeyVJrQ2uR4H3p2+0R8itUh6tScfkzFAtQJvuNtZ9k940/JtNb+991+/ibqw7YlthgqsKVeO/mdOb/ujm+yVA8kcqUHikdxqzWDZ1u6NntiqtRqOVmm/SYdzb4qizJetgWqMk0mmmmsU1nTWs/PRvNjmye0WSSSbqUMd3Qk9zhvuD/pfU99FWpZFjDkW6dreE+Z2sGDdV5UrRRhXoyyoS9zi9+MlvNGcUGrtTLyd4AAAAAAAAAAAAAAAAAAAAAAADmG2bb5StVKz47inTU2tdSbed8kUudnTzke2N/Mans6X3S1Y1+JwZVtj/AA+KKyX/AGI7C6UqULTbE5uolKnRxcYxg86lPDO29OGjB5+Ln09D5DvljqwnSpzp4OEoRlBrRkOKa6izbKkoxSj3layU4yk87uNPbdh931I5PcY03vTpbiSevNmfvTOW7ILoqWW0ToTeUsFKnNLBTpvHB4bzzNYa0zuRzPbWqwdeywXlxpzc9eTKSyfuyILJVln5rd6J7VSjmZy1Mo55BJomcADyAwAQIYIAEMtu1vfEqVsVnk/4Vo3OG9GsluZe/DJ48VqOuHAbnk1a7M1pVek1yqpHA78Z9rilJPaaFkfwtAAFQtAAAAAAAAAAAAAAAAAAAAA5HtjfzGp7On9064cj2x/5jP2dL5MtWP8AM4Mq2z8viirlq2LbM52aCo1YOtRTeTg8KlPHO1HHM1xPDTp3irEGlOEZq6RnQnKDvidItm2TRyH3CjUlPe7rkQgnreTKTfJm5Tn1vt1StVnWqyy6k3jJ6Et5JLeSWYxiTinShT7KO6lWc+0ADySEYAIEMEACGCAAAy7p+tWb21L8SJ384BdP1qze2pfiRO/lC2Yov2TsvzAAKZbAAAAAAAAAAAAAADSX5slstlzVZ4zwxVGnhKbWt70VytFMt22NaZN9wo0qcdc8qpPlzYJdZNToTmr0tRDOvCGpvWdOByL6eXj6Sn0UR9Pbx4dPooknsdTw5kftlPxOumgvjYnZLRVdasqmW1GLyZ5KwWjMUH6eXj6Sn0UR9Pbx9JT6KJ1Gy1Yu9O7icytVKSuav4Fx8X136qvSvsHi+u/VV6V9hTfp7ePpKfRRI+nt5ekp9FE70Vo3upzpaG70Ln4vrv1VelfYPF7d+qr0r7CmfT28vSU+iiPp7eXpKfRRFoq+91DS0N3oXPxfXfqq9K+weL27tVXpX2FL+nt5ekp9FEfT+8uHT6KIaKvvdQ0tDd6GjvqzRpWq0UoY5FOtOEMXi8mMmlizCPta7ROrUqVZ4OdScpzaWCcpPF5j4lxX3ayo8dQIAGIAECGZd0fWrN7al+JE/QB+f7o+tWb21L8SJ3m045E2s25eDWkz7dLNuexMv2JXprxPuCu981OHP4mO+anDn8TPNe/Ke4+aNX2R7SxAritVRaJy58TKoXpJZprFcJZmvdvktLLNCTuknHxxXNHMrLJYazcg8U6iksqLxT3z2aqaavRWAAGAKfs22U97Lveztd3ksZSzNUIPQ8OE95e972Ngvy8o2ezVbRLPkR3MeHN5ox97aOI2q0TqTnUqSypzk5Tk9+T/ACLdloqbzpYLqVLVWcFmxxfQ8VJylJyk3KUm3KUm3KUnpbb0s8gg0zNBIIAAeQSIAAeQGACBDBAAhggAAABAhgAABlXT9Zs3tqX4kTvdq83P1WcDuj61ZvbUvxInfLV5ufqv5GblDs8GaFh+qK8QAfN0ejAB5GMybFa3CWuL0rsN/GSaTWdPQ9ZVzb3PXxi4PTHOuRm3ke1tS0MsHh54tcVe/wDpTtVLVnribMAHpCgc8207wz2eyp7zrVFzxh/99Rz832zi05d42l44qDjTjxKMUmviyjQGzQjm00vvWY9eWdUbBIIJSIHkEiAAHkBgAgQwQAIYIAAAAQIYAAACAQIZsNj1Fzttjgs+Nejj6qqJt8yZ3e1+bn6r+Ryravup1LY7S1uKEXg951ppxS48IuT4tzrOm3nPCk1raS58TJynUUYSeyL+TNKwwerxZpQDyfPT0IAIAAZF31cmrDU3g+TR8zHIxwzrStHKdU6jpzU13O/kKUc5NbS2Axu/YA93pqO8jI0cthxC96mVarRPhVqsuepJmITUljKT1tvnZ5N9YGA3e7weQSAgAeQGACBDBBkWKw1q0sihTnVlvqEXLJ429CXGyw2bYBeM1jKFKjxVKqx+wpHEpxji7juMJSwV5ViC6eLa3eks3SVf8B4tbd6SzfHV/TONPT3kSaCpsKWC5+LW3eks/SVf0x4tLd6SzdJV/TFp6e8g0FTdKWC6eLS3eks3SVv8Dz4tLw9LZ+kq/php6e8g0FTYU0gufi0t/pbN0lX9M+tDaytbf8StQgtcO6VHzNRFp6e0aoT2FGNncFw2i11MijHcprutWS/h0lxvff8A1Wd8mddCuza2skMJV6lS0tf0+apfDF5X2i5WWzU6cFTpQjThHNGEYqMVyJEM7UsIayWFlf8AUYdx3VSs1CFnpLcxzyk/KnN6Zy432LeMa9q+M1BaI6eXf/3lMm3W9RTjB4y0NrRE055HK9vUloYO/ef09eW27bstC74nwABBgF4AAQwQDyAycWCAF4XHKprBtam0eDLvWnk2m0Q4NWpHmqNfkYp9cTvV54ZrW0ADyMAAQIYLXsM2Iu1fx6+VCzJ4JLNOvJPOk96K0N+5a1o7huyVotVKzxxSnLdyX9FNLGT5cE/fgdzs9CNOEKdOKhCEVGEVojFLBIq2ms4rNWLLVnoqTzngjxYrHSpU40qMI04R0Qikly8b4xWtdOOZvPqWkwbXbXJuMHhHXr/YwzyNrywlJxpK/wAXhwXf54eZt07Nq+LV4Gxlea3o4+88+FXwF8X7GAQZrypat/pH0J9BDYbDwq+Avi/Yjwq+Avi/Y15Avedq3+kfQfs9PYbLws+B9r9iPCz4C+L9jXEC952rf6R9B+z09hsvCz4C+L9h4XfAXxfsa0gPedq3+kfQPZ6ew2Er3lvRS5WY1a2VJZm82rQj4HkiqW2vUV0pu7l8tR3GjBYIAEFQlAAAYIB5AYAAhgEYAAKFszs/c7ytcddTui48uKn85M0xdttSw5Noo2hLNVpunLVlQeOflU/slHPrNGV8E/A8TWjmza8QAQSHAIAEMv8AtTWNOpaq7XkQhSg/WblL7sOcvl51sIKK0y+W+VbapX/Drvf74a9ypw7WWC9JbtLUvzPN5brOFObWOpffA2rDBXRXEwwCDxRrggEDGACBDABAgAB5AYAIAYAAhggABg8gCGCEm8y0vMuUkybqo5VWGqO6fu0dZJSpOpNQXe7uYpSzU5bDd94wBlA93oaO6jF0k9pX9mt1O0WKpCCyqkMKtJb7nHHFLjcXJcrRxfE/RBybbA2NujVlaqUf4FSWM0tFGq3nT1Rk9HG8NRfslW74HwM+10r/AI1xKgQAXikCAAA6rtUfUq3/AKZfhUzeXp5x8iNFtUfUq3/pl+FTN7ennHyI8pl/8p/5L5M3rB3eRinkEHkjUABAhgAgQAA8gMAEAMAAQwQAAweQBDAB5AYN9c9myaeU9M8/It7/AHkMG7LA5NTmtwtC4b7CwHoMj2J36ea/x49/0W3X3XX0LXW/oXH0AAPQmeD5VqMJxlCcVOEk4yhJJxlF6U09KPqAA5psi2vaicqlhalF5+95ywnHihN5muKWHKyl2y7LRSbVWjVptcOEknyPDB+47+C1C1yWp6yrOyxeGo/O+RLU+ZkZEtT5mfokHftn6ev8HHsf6un8lJ2qE1Yq2Ka/5MtPsqZvL084/cbo0t6+cfIjz+XJZ1BvbJfJmpY45skvAwwCDyppAAg5AAHkTOkZCsVZpNQeDzrOtHOT3hW4HWu02VK3UVFJzzpJPNLThyHvwjQ4fVLsN5WCw99b90PQpaatu9GanvCtwHzrtHeFfgdce023hGhw+qXYPCNDh9UuwPd9g/vfuh6D01bc6M1PeFfgdce0jwfX4HWu02/hKhw+qXYPCVDh9UuwPd9g/vfvh6Bp6250Zp/B9fgdce0eD6/A612m4V40G0lPO3gs0tPMZhLTyTZanYqN3bHF/JHMrVVjjG7gyteD6/o+uPaR4Or+j649pZgSe46G9Lp6C9tnsRXKd1Vn/So8bl2YmfZbohHPN5b1aEbQE9HJVnpu+5yf6tfRJLmiOdqqS8PIAA0iuAAAAAAAAAAAAAA0l6+cfIjdmkvbzj5EZWWf/N/svkyxZu3wMMAg8qaIAADB5BADJIAEMEAz7PdUpJSm8j/rhi/fqJqFnqVpZtNX/e3D71HM5xgr5MwDybC03VKKcoPLS0rDB4cRrwr0KlGWbUV318n9+IU5xmr4s92fy4+si1lToeXH1kWw3chdifmvqU7bjHiAAbpRAAAAAAAAAAAAAAAAAAAABpL284+RG7NXfFLNGa3s0uTeM3K0HKzO7uafDv5X38CezO6fmasAHkjTB5BADAAEMEAAB97uinWgno08yb/IspU6dRxkpR0prAsFnt9OaW6UXvxbwfu1noMi16cYypt3Sbv196u7vLXzKNspybUlgZhWLwilVmlox+ef8zdWm8KcFmalLeinjn/Ir1SblJyelt48rFlq0U5RjTTvad78NWHH6DscJJuTwJoeXH1kW0qtipuVWEVrxfu0lqJMhJ6Ob8V0X8oVuetIAA3SiAAAAAAAAAAAAAAAAAAAADxKKaaaxT0rWj2BNAaK3WGUMZRzw178f91mGWkwa9205Z1uHrXYYFryM786g/8AV/R/R4bS7StXdPmaIGdVuuovJ3a5cOpmLOy1FphJc7XOY9Sy1qfag1w1c1ei3GpGWDPmQHx5iMStnLaS3EnkYkYicltHcSQeoQk/JWPuZ94WCtLRDDlwXzJYUZ1OxFvyV/yOXOMcXcYpMINtRim29CWlm1oXLw5+6GnnfYbOz2aEFhCKWvfb5WaVnyPWm/xPhXN8sOetbCvUtkF2dbMa7bD3NZUs83p1JakbAA9NRowpQUIK5L75mbObk72AASnIAAAAAAAAAAAAAAAAAAAAAAAAAAAAHUcRM8VdBrq4BUyhiWKB8omdZSAVbH2iWrgZgANmriUkAAQjAAAAAAAAAAAAAAAAA//Z'
        },
        {
            name: "MongoDB",
            imglink: mongo
        }
    ]

    const cards = list.map((item, index) => {
        return (
            <div key={index} >
                <div className='h-36 w-40 sm:ml-4 bg-black font-mono font-semibold text-lime-300 hover:scale-105 rounded-xl text-center sm:m-2 mr-24'>
                    <img className='h-28 ml-4 p-2 w-28' src={item.imglink} alt="" />
                    <p>{item.name}</p>
                </div>
            </div>
        )
    })
    return (
        <center>
            <div className='text-center'>
                <p className='text-3xl'>Skill</p>
                <div className='grid grid-cols-2 md:grid-cols-4  gap-4'>
                    {cards}

                </div>
            </div>
        </center>
    )
}

export default Skill
