function Tags(props: any) {
  const { children } = props;
  return (
    <div className="rounded-[25px] bg-[#E8DEF8] p-2 px-3 m-2 h-min w-min  text-black font-[500] tracking-[0.1px] hover:bg-[#f6def8]">
      {children}
    </div>
  );
}

export default Tags;
