import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;

public class Solution {

	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		
		int T = Integer.parseInt(br.readLine());
		String[] arr = {"a","e","i","o","u"};
		for(int tc = 1; tc <= T; tc++) {
			String str = br.readLine();

			sb.append("#"+tc+" "+str.replaceAll("[aeiou]", "")+"\n");
		}
		System.out.print(sb);
	}

}
