import Image from "./Image";
const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <Image
          src="userImg.jpeg"
          className="w-10 h-10 rounded-full object-cover"
          w="40"
        />
        <span className="font-medium">John Doe</span>
        <span className="text-sm text-gray-500">3 days ago</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum magnam
          ipsum quibusdam molestiae. Magnam vel aliquam quas iusto fugiat autem
          rem molestiae veritatis facere! Suscipit voluptate consequuntur hic.
          Tempora, corrupti.
        </p>
      </div>
    </div>
  );
};

export default Comment;
