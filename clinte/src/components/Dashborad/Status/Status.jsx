import CardStatus from "../../layouts/ui/cardStatus/CardStatus";
const Status = () => {
  return (
    <section className="status py-4 ">
      <div className="container ">
        <div className="row">
          <div className="col-12 col-md-3">
            <CardStatus
              counter="200"
              title="project"
              icon={<i class="fa-solid fa-building"></i>}
            />
          </div>
          <div className="col-12 col-md-3">
            <CardStatus
              counter="100"
              title="user"
              icon={<i class="fa-solid fa-user"></i>}
            />
          </div>
          <div className="col-12 col-md-3">
            <CardStatus
              counter="400"
              title="developer"
              icon={<i class="fa-solid fa-code"></i>}
            />
          </div>
          <div className="col-12 col-md-3">
             <CardStatus
              counter="150"
              title="plugins"
              icon={<i class="fa-brands fa-wpexplorer"></i>}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Status;
