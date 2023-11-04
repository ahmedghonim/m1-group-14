import { put } from "@vercel/blob";

const uploadFile = async (file: File) => {
  const result = put(file.name, file, {
    access: "public",
  });

  return result;
};

export default uploadFile;
