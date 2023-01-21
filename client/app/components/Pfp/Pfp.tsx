function Tags(props: any) {
  return (
    <div className="">
      <img
        className="rounded-full overfit-cover h-12 w-12 m-2"
        src={
          props.imageSrc ||
          "https://media.licdn.com/dms/image/C4E03AQFdNz-6v2F6wg/profile-displayphoto-shrink_800_800/0/1516921259167?e=2147483647&v=beta&t=ZfWofipwBxQ4fMCPqHsdGdph2xsIN7P6eEEuydmZPVc"
        }
        alt="pfp"
      />
    </div>
  );
}

export default Tags;
