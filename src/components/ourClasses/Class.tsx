type Props = {item: {name: string, description?: string, image: string}}

const Class = ({item: {name, description, image}}: Props) => {
  const overlayStyles = `
    p-5 absolute z-30 flex h-[263px] w-[350px] flex-col justify-center items-center 
    whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 
    hover:opacity-90
    `

  return (
    <li className="relative inline-block h-[350px] w-[350px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img src={image} alt="image" />
    </li>
  )
}

export default Class