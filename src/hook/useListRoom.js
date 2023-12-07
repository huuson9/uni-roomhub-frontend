import { useQuery } from "@tanstack/react-query";

export default function useListRoom() {
  const { isPending, error, data } = useQuery({
    queryKey: ["list-room"],
    queryFn: () =>
      fetch("http://127.0.0.1:8080/api/rooms").then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return {
    isPending,
    error,
    listRooms: data,
  };
}
