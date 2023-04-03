import Image from "next/image";
import React from "react";

const CharacterDetails = ({ characters }: any) => {
  return (
    <div className=" rounded">
      <div>
        <h3 className="mb-3 text-fuchsia-900 font-bold text-lg">Characters</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 w-full">
        {characters.map((character: any) => {
          return (
            <div
              key={character.character.mal_id}
              className="flex   gap-x-3 lg:px-5 lg:py-2 rounded "
            >
              <div className="w-full flex flex-col justify-center items-center">
                <div className="w-32 md:w-full border-fuchsia-900 mb-2 pb-32 relative border-4 rounded-full">
                  <Image
                    alt="test"
                    fill
                    src={character.character.images.jpg.image_url}
                    className="object-cover rounded-full"
                  />
                </div>
                <span className="block text-sm text-center line-clamp-1">
                  {character.character.name}
                </span>
                <span className="text-xs ml-1 block">{character.role}</span>
              </div>
              <div className="w-full flex flex-col justify-center items-center">
                <div className="w-32 md:w-full border-fuchsia-900 mb-2  pb-32 relative border-4 rounded-full">
                  <Image
                    alt="test"
                    fill
                    src={character.voice_actors[0]?.person.images.jpg.image_url}
                    className="object-cover rounded-full"
                  />
                </div>
                <span className="text-sm block text-center line-clamp-1">
                  {character.voice_actors[0]?.person.name}
                </span>
                <span className="text-xs block">
                  {" "}
                  {character.voice_actors[0]?.language}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterDetails;
