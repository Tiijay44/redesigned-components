import Modal from "../components/Modal";
import { useState } from "react";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button secondary rounded onClick={handleClose}>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Nulla eget maximus sem. Ut quis ultricies dolor. Phasellus tincidunt vel
        dui quis congue. In vitae magna fringilla, aliquet sapien et, placerat
        risus. Proin ut ipsum eu dolor ullamcorper congue. Vestibulum a neque
        eget justo tincidunt dignissim. Nullam nec tellus egestas justo pulvinar
        mollis eu id dui. Nam posuere congue arcu, at blandit arcu rhoncus eu.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Donec id orci lectus. Nam odio nibh, finibus
        aliquet nisi eu, hendrerit condimentum orci. Aliquam posuere lacinia
        eros, vitae volutpat enim tincidunt a. Vivamus elit ligula, ultricies
        eget lacus sit amet, lobortis porta ex. Nunc a commodo felis. Duis eu ex
        nunc. Aliquam commodo mauris nec tempor vehicula.
      </p>
      <p>
        Nulla eget maximus sem. Ut quis ultricies dolor. Phasellus tincidunt vel
        dui quis congue. In vitae magna fringilla, aliquet sapien et, placerat
        risus. Proin ut ipsum eu dolor ullamcorper congue. Vestibulum a neque
        eget justo tincidunt dignissim. Nullam nec tellus egestas justo pulvinar
        mollis eu id dui. Nam posuere congue arcu, at blandit arcu rhoncus eu.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Donec id orci lectus. Nam odio nibh, finibus
        aliquet nisi eu, hendrerit condimentum orci. Aliquam posuere lacinia
        eros, vitae volutpat enim tincidunt a. Vivamus elit ligula, ultricies
        eget lacus sit amet, lobortis porta ex. Nunc a commodo felis. Duis eu ex
        nunc. Aliquam commodo mauris nec tempor vehicula.
      </p>
      <p>
        Nulla eget maximus sem. Ut quis ultricies dolor. Phasellus tincidunt vel
        dui quis congue. In vitae magna fringilla, aliquet sapien et, placerat
        risus. Proin ut ipsum eu dolor ullamcorper congue. Vestibulum a neque
        eget justo tincidunt dignissim. Nullam nec tellus egestas justo pulvinar
        mollis eu id dui. Nam posuere congue arcu, at blandit arcu rhoncus eu.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Donec id orci lectus. Nam odio nibh, finibus
        aliquet nisi eu, hendrerit condimentum orci. Aliquam posuere lacinia
        eros, vitae volutpat enim tincidunt a. Vivamus elit ligula, ultricies
        eget lacus sit amet, lobortis porta ex. Nunc a commodo felis. Duis eu ex
        nunc. Aliquam commodo mauris nec tempor vehicula.
      </p>
      <p>
        Nulla eget maximus sem. Ut quis ultricies dolor. Phasellus tincidunt vel
        dui quis congue. In vitae magna fringilla, aliquet sapien et, placerat
        risus. Proin ut ipsum eu dolor ullamcorper congue. Vestibulum a neque
        eget justo tincidunt dignissim. Nullam nec tellus egestas justo pulvinar
        mollis eu id dui. Nam posuere congue arcu, at blandit arcu rhoncus eu.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Donec id orci lectus. Nam odio nibh, finibus
        aliquet nisi eu, hendrerit condimentum orci. Aliquam posuere lacinia
        eros, vitae volutpat enim tincidunt a. Vivamus elit ligula, ultricies
        eget lacus sit amet, lobortis porta ex. Nunc a commodo felis. Duis eu ex
        nunc. Aliquam commodo mauris nec tempor vehicula.
      </p>
      <p>
        Nulla eget maximus sem. Ut quis ultricies dolor. Phasellus tincidunt vel
        dui quis congue. In vitae magna fringilla, aliquet sapien et, placerat
        risus. Proin ut ipsum eu dolor ullamcorper congue. Vestibulum a neque
        eget justo tincidunt dignissim. Nullam nec tellus egestas justo pulvinar
        mollis eu id dui. Nam posuere congue arcu, at blandit arcu rhoncus eu.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Donec id orci lectus. Nam odio nibh, finibus
        aliquet nisi eu, hendrerit condimentum orci. Aliquam posuere lacinia
        eros, vitae volutpat enim tincidunt a. Vivamus elit ligula, ultricies
        eget lacus sit amet, lobortis porta ex. Nunc a commodo felis. Duis eu ex
        nunc. Aliquam commodo mauris nec tempor vehicula.
      </p>
      <p>
        Nulla eget maximus sem. Ut quis ultricies dolor. Phasellus tincidunt vel
        dui quis congue. In vitae magna fringilla, aliquet sapien et, placerat
        risus. Proin ut ipsum eu dolor ullamcorper congue. Vestibulum a neque
        eget justo tincidunt dignissim. Nullam nec tellus egestas justo pulvinar
        mollis eu id dui. Nam posuere congue arcu, at blandit arcu rhoncus eu.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Donec id orci lectus. Nam odio nibh, finibus
        aliquet nisi eu, hendrerit condimentum orci. Aliquam posuere lacinia
        eros, vitae volutpat enim tincidunt a. Vivamus elit ligula, ultricies
        eget lacus sit amet, lobortis porta ex. Nunc a commodo felis. Duis eu ex
        nunc. Aliquam commodo mauris nec tempor vehicula.
      </p>
      <p>
        Nulla eget maximus sem. Ut quis ultricies dolor. Phasellus tincidunt vel
        dui quis congue. In vitae magna fringilla, aliquet sapien et, placerat
        risus. Proin ut ipsum eu dolor ullamcorper congue. Vestibulum a neque
        eget justo tincidunt dignissim. Nullam nec tellus egestas justo pulvinar
        mollis eu id dui. Nam posuere congue arcu, at blandit arcu rhoncus eu.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Donec id orci lectus. Nam odio nibh, finibus
        aliquet nisi eu, hendrerit condimentum orci. Aliquam posuere lacinia
        eros, vitae volutpat enim tincidunt a. Vivamus elit ligula, ultricies
        eget lacus sit amet, lobortis porta ex. Nunc a commodo felis. Duis eu ex
        nunc. Aliquam commodo mauris nec tempor vehicula.
      </p>
      <p>
        Nulla eget maximus sem. Ut quis ultricies dolor. Phasellus tincidunt vel
        dui quis congue. In vitae magna fringilla, aliquet sapien et, placerat
        risus. Proin ut ipsum eu dolor ullamcorper congue. Vestibulum a neque
        eget justo tincidunt dignissim. Nullam nec tellus egestas justo pulvinar
        mollis eu id dui. Nam posuere congue arcu, at blandit arcu rhoncus eu.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Donec id orci lectus. Nam odio nibh, finibus
        aliquet nisi eu, hendrerit condimentum orci. Aliquam posuere lacinia
        eros, vitae volutpat enim tincidunt a. Vivamus elit ligula, ultricies
        eget lacus sit amet, lobortis porta ex. Nunc a commodo felis. Duis eu ex
        nunc. Aliquam commodo mauris nec tempor vehicula.
      </p>
      <p>
        Nulla eget maximus sem. Ut quis ultricies dolor. Phasellus tincidunt vel
        dui quis congue. In vitae magna fringilla, aliquet sapien et, placerat
        risus. Proin ut ipsum eu dolor ullamcorper congue. Vestibulum a neque
        eget justo tincidunt dignissim. Nullam nec tellus egestas justo pulvinar
        mollis eu id dui. Nam posuere congue arcu, at blandit arcu rhoncus eu.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Donec id orci lectus. Nam odio nibh, finibus
        aliquet nisi eu, hendrerit condimentum orci. Aliquam posuere lacinia
        eros, vitae volutpat enim tincidunt a. Vivamus elit ligula, ultricies
        eget lacus sit amet, lobortis porta ex. Nunc a commodo felis. Duis eu ex
        nunc. Aliquam commodo mauris nec tempor vehicula.
      </p>
      <p>
        Nulla eget maximus sem. Ut quis ultricies dolor. Phasellus tincidunt vel
        dui quis congue. In vitae magna fringilla, aliquet sapien et, placerat
        risus. Proin ut ipsum eu dolor ullamcorper congue. Vestibulum a neque
        eget justo tincidunt dignissim. Nullam nec tellus egestas justo pulvinar
        mollis eu id dui. Nam posuere congue arcu, at blandit arcu rhoncus eu.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Donec id orci lectus. Nam odio nibh, finibus
        aliquet nisi eu, hendrerit condimentum orci. Aliquam posuere lacinia
        eros, vitae volutpat enim tincidunt a. Vivamus elit ligula, ultricies
        eget lacus sit amet, lobortis porta ex. Nunc a commodo felis. Duis eu ex
        nunc. Aliquam commodo mauris nec tempor vehicula.
      </p>
      <p>
        Nulla eget maximus sem. Ut quis ultricies dolor. Phasellus tincidunt vel
        dui quis congue. In vitae magna fringilla, aliquet sapien et, placerat
        risus. Proin ut ipsum eu dolor ullamcorper congue. Vestibulum a neque
        eget justo tincidunt dignissim. Nullam nec tellus egestas justo pulvinar
        mollis eu id dui. Nam posuere congue arcu, at blandit arcu rhoncus eu.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Donec id orci lectus. Nam odio nibh, finibus
        aliquet nisi eu, hendrerit condimentum orci. Aliquam posuere lacinia
        eros, vitae volutpat enim tincidunt a. Vivamus elit ligula, ultricies
        eget lacus sit amet, lobortis porta ex. Nunc a commodo felis. Duis eu ex
        nunc. Aliquam commodo mauris nec tempor vehicula.
      </p>
      <Button success rounded onClick={handleClick}>
        Open Modal
      </Button>
    </div>
  );
}

export default ModalPage;
