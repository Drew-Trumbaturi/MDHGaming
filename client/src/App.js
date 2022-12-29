import React from "react";

// We use Route in order to define the different routes of our application
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";

// We import all the components we need in our app
import Navbar from "./Components/Nav";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container bg-light">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1 className="center">What is MDH Gaming</h1>
      <br />
      <p>
        MDH Gaming is all about giving everyone the chance to play the top games
        on the market no matter if you dont have a pc yourself, or you just want
        to have a fun LAN party with your friends.
      </p>
      <div className="col-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d745.0508111448528!2d176.16780567472682!3d-37.68645058477242!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x18d14e52e117cecc!2sMDH%20Gaming!5e0!3m2!1sen!2snz!4v1672213893048!5m2!1sen!2snz"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nisi
        nibh, posuere eget tristique sit amet, ultrices a nulla. Duis augue ex,
        pellentesque non suscipit eget, interdum a nibh. Suspendisse mi nisl,
        vulputate id commodo a, dictum a turpis. Nam et euismod massa, sed
        accumsan lorem. Curabitur pellentesque at eros vel rhoncus. Proin congue
        quam odio, nec porta augue viverra a. Mauris ut rutrum ex. Duis a
        condimentum libero, ac mattis lorem. Vivamus fringilla arcu libero, et
        scelerisque urna iaculis eget. Vivamus ac maximus ante. Suspendisse
        pellentesque ac purus sit amet aliquet. Cras sagittis libero id nisi
        pretium viverra. Vestibulum iaculis ultricies nisl. Pellentesque laoreet
        orci eu venenatis suscipit. Sed vestibulum, turpis sed scelerisque
        sagittis, lectus erat bibendum turpis, ut sagittis nunc purus sed mi.
        Phasellus congue tempus vestibulum. Sed cursus vel neque vel venenatis.
        Quisque id neque magna. Aliquam purus quam, ullamcorper laoreet orci
        rutrum, rhoncus vestibulum quam. Duis at lorem vel neque interdum
        pharetra vel et tellus. Quisque a sapien magna. Curabitur ut turpis
        tempus tellus ultricies rhoncus in et ipsum. Suspendisse vel lacinia
        tortor. Aenean eu malesuada nisi. Nulla vel ultricies turpis. Morbi
        tortor velit, finibus at feugiat vel, hendrerit consequat mauris.
        Vivamus tempus dui quis porta dapibus. Ut euismod interdum pharetra.
        Praesent id lorem malesuada, lacinia orci sit amet, sollicitudin massa.
        Maecenas luctus sem quam, a porttitor massa mattis sit amet. Sed diam
        dolor, posuere et lorem at, sagittis condimentum ex. Sed vulputate
        semper neque, quis auctor diam ultricies ac. Maecenas et faucibus dui.
        Nam ullamcorper, lorem scelerisque vehicula rhoncus, velit diam
        porttitor nulla, fringilla volutpat nisl erat eget tellus. Maecenas in
        nisl sed nisi venenatis semper vel a dui. Mauris convallis tortor eget
        tincidunt sodales. Pellentesque tortor ante, pellentesque non fringilla
        eget, laoreet eu turpis. Curabitur et massa vitae diam gravida accumsan
        at eu erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Etiam sit amet est dictum nisl dictum bibendum interdum eu metus. Morbi
        vitae consequat augue. Maecenas sollicitudin pharetra ligula id dapibus.
        Cras pellentesque maximus libero, vitae suscipit neque imperdiet sit
        amet. Donec elementum neque a eros sodales facilisis. Sed rutrum felis
        arcu. Morbi ac tempor sem. Aliquam dolor felis, egestas eget imperdiet
        et, pulvinar at est. Pellentesque auctor sem quis nisi interdum, ut
        vulputate ante varius. Fusce accumsan dui at hendrerit porttitor.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed
        tempor, orci sed suscipit maximus, enim sapien porta ligula, accumsan
        sollicitudin purus lacus in nisl. Suspendisse interdum sapien libero,
        eget luctus elit aliquet vitae. Pellentesque fringilla libero ut
        malesuada dictum. Sed non risus bibendum, dapibus lectus ut, tempor
        turpis. Donec non cursus quam. Nunc a arcu libero. Aenean at aliquet
        tortor, in semper dui. Maecenas feugiat auctor ligula id consequat.
        Curabitur a tincidunt augue, et ullamcorper nunc. Etiam et orci augue.
        Cras at euismod quam, non euismod lorem. Aliquam vitae purus vitae
        turpis tincidunt condimentum sollicitudin ut eros. Integer dictum
        venenatis arcu a ultricies. Aenean eget urna a neque iaculis suscipit ut
        vitae sem. Aliquam erat volutpat. Pellentesque at magna dolor. Fusce ac
        enim neque. Suspendisse porta dui eget lacus rhoncus commodo. Ut sem mi,
        posuere nec leo id, placerat luctus turpis. Quisque et elit aliquam,
        molestie neque consectetur, elementum dui. Pellentesque pharetra, est
        sit amet accumsan bibendum, dui urna vestibulum arcu, vel commodo est
        diam sed purus. Vivamus neque augue, pharetra ut magna sit amet,
        scelerisque sodales eros. Fusce porta pretium placerat. In a elit elit.
        Fusce mi ante, facilisis non maximus et, tristique vel est. Nulla
        pretium venenatis justo, at malesuada elit varius vitae. Morbi quis
        viverra erat, ut tincidunt quam. Sed eu metus ante. Sed non imperdiet
        massa, vel semper massa. Nunc tristique, leo nec facilisis sagittis,
        nisi nisi porttitor magna, a porttitor massa urna vel nibh. Vivamus nec
        ipsum rutrum, viverra velit vel, consectetur quam. Integer nec mi sit
        amet leo vehicula eleifend malesuada at nisl. Aenean varius risus eget
        sem vehicula commodo. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Mauris sit amet magna mattis, suscipit odio et, commodo dolor.
        Duis interdum gravida nunc in bibendum. Nam efficitur, arcu sit amet
        scelerisque cursus, orci ex accumsan est, nec facilisis mi mauris sit
        amet nisl. Quisque ut rhoncus orci. Quisque viverra, diam quis pretium
        porta, eros ligula elementum augue, eget facilisis purus nisl sed augue.
        In hac habitasse platea dictumst. Phasellus lectus sem, aliquam vel
        eleifend quis, venenatis a justo. In eget erat dapibus, efficitur diam
        in, aliquet dui. Ut quam quam, viverra at nunc et, vulputate luctus sem.
        Aliquam sit amet lacus et erat porta semper ut vel urna. Integer quam
        orci, convallis in nunc non, blandit iaculis dolor. Vestibulum nibh
        neque, pretium sed nunc vitae, semper dictum ipsum. Pellentesque quis
        tortor purus. Morbi aliquam metus odio, nec semper sapien hendrerit
        quis. Nam mattis eros ut tortor interdum, ac molestie velit placerat.
        Donec nisl turpis, ultricies eu ante quis, malesuada dapibus turpis.
        Proin gravida blandit sapien, ac malesuada ante lobortis ut. Donec vel
        pharetra augue, quis iaculis nunc. Fusce rutrum eu erat at hendrerit.
        Nullam consectetur sem neque, eu dictum erat dignissim id. Curabitur
        ligula sapien, rhoncus at urna sed, aliquam varius dolor. Phasellus quis
        venenatis erat. Pellentesque mattis auctor tellus nec hendrerit.
        Curabitur porta tortor id neque rhoncus vestibulum. Duis aliquam, ante
        vel sodales porta, felis massa commodo dolor, et dictum diam lectus nec
        ex. Quisque id justo ultrices, suscipit lorem ac, sagittis nisi. Integer
        et lorem augue. Maecenas id risus ultricies, tempor erat et, interdum
        augue. Ut tristique, est a volutpat congue, leo sem porta felis, ornare
        faucibus sapien diam ac lacus. Pellentesque lacinia, nisl sed vestibulum
        sollicitudin, est metus pharetra est, sit amet interdum est elit non
        elit. Praesent quis magna ac libero placerat aliquet mattis a turpis.
        Donec non dui sit amet tortor tempor sollicitudin vitae at urna. Mauris
        eget libero ultricies, vestibulum orci eu, congue ante. Ut non dictum
        libero, nec dictum orci. Duis sollicitudin justo hendrerit dolor
        facilisis feugiat. Ut a nunc at nulla commodo volutpat. Sed et dignissim
        ipsum, sit amet placerat nisi. In tempus ut lacus sed dapibus. Proin
        laoreet tristique sapien sit amet molestie. Nullam consequat dolor
        velit, at vehicula tortor aliquam vitae. In hac habitasse platea
        dictumst. Nulla faucibus ullamcorper turpis. Proin scelerisque elit sed
        leo viverra commodo id vitae odio. Phasellus porttitor, est eget maximus
        rutrum, est eros rhoncus mi, sit amet tempor lectus eros id ligula.
        Etiam vestibulum varius lorem. Fusce pretium nisi vitae eros varius
        consectetur. Donec sit amet dolor aliquet, tempor sapien in, rhoncus
        massa. Vestibulum imperdiet purus vel scelerisque porttitor. Quisque
        quis arcu vel diam interdum facilisis a eget nunc. Maecenas diam tellus,
        maximus non faucibus sit amet, condimentum a lectus. Pellentesque
        pulvinar, sapien quis malesuada placerat, nisi justo aliquet elit, non
        placerat orci quam ut dolor. Fusce enim leo, consequat ac lobortis quis,
        interdum a orci. Suspendisse potenti. Fusce finibus, urna vitae
        pellentesque semper, nunc dui bibendum odio, sit amet congue risus nisl
        ac est. Phasellus id libero eros. Nullam volutpat lobortis leo in
        varius. Ut ut molestie augue. Aliquam bibendum lorem odio, vel dapibus
        sem faucibus vel. Proin nec nisl ut neque mattis convallis. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Proin nibh augue, varius at feugiat at, imperdiet mattis nibh.
        Praesent ut placerat dolor. In at erat ante. Donec mollis mollis felis,
        sit amet imperdiet risus sollicitudin ac. Donec accumsan massa dolor,
        vel rutrum justo tincidunt et. Aliquam sit amet lacinia velit. Integer
        eu purus diam. Mauris varius erat at lectus laoreet, eu maximus nisi
        lacinia. In fermentum in tellus vel vehicula. Aenean mattis neque
        malesuada sem gravida mattis. Nam eu libero laoreet, consectetur sapien
        sit amet, auctor ligula. Duis a dolor augue. Donec interdum sagittis
        nisl, a placerat massa laoreet eu. Morbi quis dolor sapien. Pellentesque
        eget placerat neque, eu sollicitudin magna. Vestibulum maximus rhoncus
        sapien vitae pharetra. Curabitur quam sem, lobortis ut urna vitae,
        sagittis sollicitudin lacus. Nam blandit tempus orci, ut rhoncus eros
        tempor molestie. Praesent vestibulum vel tellus eu tristique.
        Pellentesque porttitor elementum augue in ullamcorper. Nullam enim ante,
        convallis vel elit id, tristique auctor mauris. Morbi ut ligula nec
        purus tempor convallis.{" "}
      </p>
    </div>
  );
}
export default App;
