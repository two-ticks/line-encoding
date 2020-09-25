
# Line Encoding 

```
Line coding is the process of converting digital data
to digital signals. Line coding converts a sequence of
bits to a digital signal. At the sender, digital data are
encoded into a digital signal; at the receiver, the
digital data are recreated by decoding the digital
signal.
```

# Interactive Line Encoding Simulations 
* [Bi-polar AMI line-coding](https://two-ticks.github.io/line-encoding/bipolar-ami-line-coding.html)
* [Diffrential Manchester line-coding](https://two-ticks.github.io/line-encoding/diffrential-manchester-line-coding.html)
* [Manchester line-coding](https://two-ticks.github.io/line-encoding/manchester-line-coding.html)
* [MLT-3 line-coding](https://two-ticks.github.io/line-encoding/mlt-3-line-coding.html)
* [NRZ-I line-coding](https://two-ticks.github.io/line-encoding/nrz-i-line-coding.html)
* [NRZ-L line-coding](https://two-ticks.github.io/line-encoding/nrz-l-line-coding.html)
* [Unipolar NRZ line-coding](https://two-ticks.github.io/line-encoding/unipolar-nrz-line-coding.html)

# Line Coding Requirements

* Small transmission bandwidth
* Power efficiency: as small as possible for required data rate and error
  probability
* Error detection/correction
* Suitable power spectral density, e.g., little low frequency content
* Timing information: clock must be extracted from data
* Transparency: all possible binary sequences can be transmitted

# Alternate Mark Inversion (Bipolar) Signaling
AMI encodes 0 as 0 V and 1 as +V or −V, with alternating signs.
AMI was used in early PCM systems.
* Eliminates DC build up on cable.
* Reduces bandwidth compared to polar.
* Provides error detecting; every bit error results in bipolar violation.
* Guarantees transitions for timing recovery with long runs of ones.
# Differential Manchester Encoding
Differential Manchester Encoding, also called biphase mark code (BMC) or FM1, is a line code in which data and clock signals are combined to form a single 2-level self-synchronizing data stream. It is a differential encoding, using the presence or absence of transitions to indicate logical value. It has the following advantages over some other line codes:

* A transition is guaranteed at least once every bit, allowing the receiving device to perform clock recovery.
* Detecting transitions is often less error-prone than comparing against a threshold in a noisy environment.
* Unlike with Manchester encoding, only the presence of a transition is important, not the polarity. Differential coding schemes will work exactly the same if the signal is inverted (wires swapped). (Other line codes with this property include NRZI, bipolar encoding, coded mark inversion, and MLT-3 encoding).
* If the high and low signal levels have the same voltage with opposite polarity, coded signals have zero average DC voltage, thus reducing the necessary transmitting power and minimizing the amount of electromagnetic noise produced by the transmission line.

# Manchester Encoding
Manchester encoding is a synchronous clock encoding technique used by the physical layer of the Open System Interconnection [OSI] to encode the clock and data of a synchronous bit stream.
The binary data to be transmitted over the cable are not sent as NRZ [Non-return-to-zero].
* A logic 0 is indicated by a 0 to 1 transition at the centre of the bit and logic 1 by 1 to 0 transition.
* The signal transitions do not always occur at the ‘bit boundary’ but there is always a transition at the centre of each bit.
* The Differential Physical Layer Transmission do not employ an inverting line driver to convert the binary digits into an electrical signal. And therefore the signal on the wire is not opposite the output by encoder.
* The Manchester Encoding is also called Biphase code as each bit is encoded by a positive 90 degrees phase transition or by negative 90 degress phase transiton..
* The Digital Phase Locked Loop (DPLL) extracts the clock signal and deallocates the value and timming of each bit. The transmitted bit stream must contain a high density of bit transitions.
* The Manchester Encoding consumes twice the bandwidth of the original signal.
* The advantages of Manchester code is that the DC component of the signal carries no information. This makes it possible that standards that usually do not carry power can transmit this information.
