export default function Page() {
  return (
    <div>
      <section className="h-screen justify-center items-center flex" id="hero">
        <div
          className="grid gap-12 grid-flow-col w-3/4 items-center h-fit max-sm:grid-flow-row"
          id="hero-content"
        >
          <div className="flex-col flex justify-center items-center">
            {/* This is the logo */}
            <div className="bg-blue-500 w-fit flex relative">
              <div className="bg-slate-950 w-2"></div>
              <div className="bg-slate-500 w-2"></div>
              <div className="absolute border-white border-y w-8 bg-white left-6 top-1"></div>
              <p className="px-2 py-1 text-white">OMOROGBE</p>
              <div className="absolute border-white border-y w-8 bg-white right-6 bottom-1"></div>
              <div className="bg-slate-500 w-2"></div>
              <div className="bg-slate-950 w-2"></div>
            </div>

            <div className="relative pt-2 w-fit max-sm:mt-2">
              <h1 className="text-3xl max-sm:text-2xl">
                Omorogbe Avenic Limited
              </h1>
              <p className="absolute top-0 right-2 text-black font-mono text-sm">
                RC: 7421725
              </p>
            </div>

            <ul className="flex">
              <li className="lists list-inside p-1 marker:text-blue-600 max-sm:list-outside max-sm:list-none">
                Printing
              </li>
              <li className="lists list-inside p-1 marker:text-blue-600 max-sm:list-outside max-sm:list-none">
                Contracts
              </li>
              <li className="lists list-inside p-1 marker:text-blue-600 max-sm:list-outside max-sm:list-none">
                Maritime Consult
              </li>
            </ul>
          </div>
          <div className="relative flex h-fit">
            <div className="absolute h-full w-1 bg-blue-500 left-0"></div>
            <p className="ml-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              adipisci sunt quibusdam maiores provident! Libero laboriosam non
              quidem autem minus itaque cupiditate harum nobis fugit vero,
              eveniet corporis neque tempore! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolores nemo repellat in quas ad
              tenetur incidunt ullam quasi culpa nisi voluptas optio, ratione
              odio minima molestiae. Excepturi enim perferendis dignissimos.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="justify-center items-center flex flex-col">
        <h2 className="text-4xl font-bold text-left w-3/4">About us</h2>
        <hr />

        <div id="printing" className="m-3 w-3/4  p-3 flex flex-col">
          <h3 className="text-3xl uppercase font-bold">Printing</h3>

          <div className="flex w-full gap-6 max-sm:flex-col">
            <div className="w-80 h-64 border-2 border-blue-700 flex-grow basis-full"></div>

            <p>
              We offer a wide range of printing services, including business
              cards, brochures, flyers, and more. Our state-of-the-art printing
              equipment ensures high-quality prints that meet your needs. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
              veritatis eius aut laborum optio sed molestias dolor incidunt,
              consequuntur dicta soluta repudiandae nesciunt ex quos debitis,
              iusto placeat corporis similique.
            </p>
          </div>
        </div>

        <div id="contracts" className="m-3 w-3/4 p-3 flex flex-col text-right">
          <h3 className="text-3xl uppercase font-bold">Contracts</h3>

          <div className="flex w-full gap-6 flex-row-reverse text-left max-sm:flex-col">
            <div className="w-80 h-64 border-2 border-blue-700 flex-grow basis-full"></div>

            <p>
              Our contract services include drafting, reviewing, and negotiating
              contracts for various industries. Our team of experts will ensure
              that your contracts are comprehensive and protect your interests.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate veritatis eius aut laborum optio sed molestias dolor
              incidunt, consequuntur dicta soluta repudiandae nesciunt ex quos
              debitis, iusto placeat corporis similique.
            </p>
          </div>
        </div>

        <div id="equipment-hire" className="m-3 w-3/4 p-3 flex flex-col">
          <h3 className="text-3xl uppercase font-bold">Equipment Hire</h3>

          <div className="flex w-full gap-6 max-sm:flex-col">
            <div className="w-80 h-64 border-2 border-blue-700 flex-grow basis-full"></div>
            <p>
              We offer a variety of equipment for hire, including machinery,
              tools, vehicles, cranes, forklifts and maritime equipment. The
              equipment are well-maintained and available for short-term or
              long-term hire. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Cupiditate veritatis eius aut laborum optio sed molestias
              dolor incidunt, consequuntur dicta soluta repudiandae nesciunt ex
              quos debitis, iusto placeat corporis similique.
            </p>
          </div>
        </div>

        <div
          id="maritime-consult"
          className="m-3 w-3/4 p-3 flex flex-col text-right"
        >
          <h3 className="text-3xl uppercase font-bold">Maritime Consult</h3>

          <div className="flex w-full gap-6 flex-row-reverse text-left max-sm:flex-col">
            <div className="w-80 h-64 border-2 border-blue-700 flex-grow basis-full"></div>

            <p>
              Our maritime consulting services provide expert advice on maritime
              operations, logistics, and management. We help our clients
              navigate the complexities of the maritime industry and optimize
              their operations. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Cupiditate veritatis eius aut laborum optio sed
              molestias dolor incidunt, consequuntur dicta soluta repudiandae
              nesciunt ex quos debitis, iusto placeat corporis similique.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
